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
    if (model[propertyName] instanceof File) {
      formData.append(formKey, model[propertyName]);
    } else if (model[propertyName] instanceof Array) {
      model[propertyName].forEach((element: any, index: number) => {
        if (typeof element != 'object') formData.append(`${formKey}[]`, element);
        else if (element instanceof File) formData.append(`${formKey}[]`, element);
        else {
          const tempFormKey = `${formKey}[${index}]`;
          toFormData(element, formData, tempFormKey);
        }
      });
    } else if (typeof model[propertyName] === 'object' && !(model[propertyName] instanceof File)) {
      toFormData(model[propertyName], formData, formKey);
    } else {
      formData.append(formKey, model[propertyName].toString());
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
