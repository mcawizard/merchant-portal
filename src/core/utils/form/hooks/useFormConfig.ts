import { R } from '@core/utils/r';
import { useEffect, useMemo, useRef } from 'react';
import { Control, FormControl } from '../form_builder';
import { FormProps } from './types';
import { getInitialValue } from './utils';

export function useFormControlConfig<T>(formControl: FormControl<T>, formProps: FormProps<T | null>): void {
  return useFormConfig<T | null>(formControl, formProps);
}

export function useFormConfig<T>(formControl: Control<T>, formProps: FormProps<T>): void {
  const lastInitialValueRef = useRef<T | null>(null);

  const initialValue: T | null = useMemo(() => {
    return getInitialValue(formProps.initialValue);
  }, [formProps.initialValue]);

  useEffect(() => {
    if (lastInitialValueRef.current !== initialValue) {
      formControl.setConfig({ initialValue });
      lastInitialValueRef.current = initialValue;
    }
  }, [formControl, initialValue]);

  useEffect(() => {
    if (!R.isUndefined(formProps.onSubmit)) {
      formControl.setConfig({ handleSubmit: formProps.onSubmit });
    }
  }, [formControl, formProps.onSubmit]);

  const { formRef } = formProps;

  useEffect(() => {
    if (R.isFunction(formRef)) {
      formRef(formControl);
    } else if (R.has(formRef, 'current')) {
      (formRef as any).current = formControl;
    }
  }, [formControl, formRef]);
}
