import { CompanyAddressResponse } from '@business/entities/company';
import { UserResponse, UserRole } from '@business/entities/user';
import { TenantConfig } from '@core/utils/config';
import { R } from '@core/utils/r';
import { message } from 'antd';
import { Subject } from 'rxjs';

export function isImage(extension: string) {
  extension = R.lowerCase(extension);
  if (extension === 'jpeg' || extension === 'jpg' || extension === 'png' || extension === 'gif' || extension === 'bmp') {
    return true;
  }
  return false;
}

export function copyToClipboard(text: string, alert = true) {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (alert) {
    message.success('Copied to clipboard');
  }
}

export function toFormData(model: any, form: FormData | null = null, namespace = ''): FormData {
  const formData = form || new FormData();
  for (const propertyName in model) {
    if (!model.hasOwnProperty(propertyName) || model[propertyName] == undefined) continue;
    const formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
    const value = model[propertyName];
    // Handle File objects first (most specific check)
    if (value instanceof File) {
      formData.append(formKey, value);
    } 
    // Handle Blob objects (File extends Blob)
    else if (value instanceof Blob) {
      formData.append(formKey, value);
    }
    // Handle arrays (but make sure it's not a File first)
    else if (Array.isArray(value)) {
      value.forEach((element: any, index: number) => {
        if (element instanceof File || element instanceof Blob) {
          formData.append(`${formKey}[]`, element);
        } else if (typeof element !== 'object') {
          formData.append(`${formKey}[]`, element);
        } else {
          const tempFormKey = `${formKey}[${index}]`;
          toFormData(element, formData, tempFormKey);
        }
      });
    } 
    // Handle nested objects (but not File, Blob, or Array)
    else if (value !== null && typeof value === 'object') {
      toFormData(value, formData, formKey);
    } 
    // Handle primitive values
    else {
      formData.append(formKey, String(value));
    }
  }
  return formData;
}

export function YesNoOptions(labels?: { yes?: string; no?: string }) {
  return [
    { label: labels?.yes || 'Yes', value: true },
    { label: labels?.no || 'No', value: false },
  ];
}

export function chooseImage(options?: { multiple?: boolean }) {
  const obs$ = new Subject<FileList>();

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = options?.multiple || false;
  input.onchange = e => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      obs$.next(files);
      obs$.complete();
    }
  };
  input.click();

  return obs$;
}

export function move(stepsIds: string[], oldIndex: number, newIndex: number) {
  throw new Error('Function not implemented.');
}

export function isValidImage(name: string | null) {
  if (!name) return false;
  const ext = name.split('.').pop();

  const extension = R.lowerCase(ext);
  if (extension === 'jpeg' || extension === 'jpg' || extension === 'png' || extension === 'gif' || extension === 'bmp') {
    return true;
  }
  return false;
}

export function isOohcodersAccount() {
  const appId = TenantConfig.get().appId;
  return appId && appId === '1755617498';
}

export function hasFullAccess(user: UserResponse | null): boolean {
  if (!user) return false;
  if (isOohcodersAccount()) return true;
  return user.email === 'system@oohcoders.com' || user.email === 'nabeel@oohcoders.com';
}

export function getAddress(address: CompanyAddressResponse) {
  if (!address) return '';
  const parts = [address.company_street, address.company_city, address.company_state, address.company_zip, address.company_country].filter(
    part => part && part.trim() !== '',
  );
  return parts.join(', ');
}
