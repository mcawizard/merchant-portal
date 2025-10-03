import { useState, useMemo } from 'react';
import { R } from '@core/utils/r';
import { useSubscribe } from '@core/utils/hooks/rxjs';
import { FieldProps, OptionalFieldProps } from './types';
import { getDynamicValue } from './utils';
import { FormControl } from '../form_builder';
import { useFieldPropsOverride } from './FieldPropsOverride';

export function useOptionalFormField<C extends FormControl<any>>(optionalFieldProps: OptionalFieldProps<C>) {
  const fieldProps = useMemo(
    (): FieldProps<C> => ({
      ...optionalFieldProps,
      control: optionalFieldProps.control || (new FormControl() as C),
    }),

    [optionalFieldProps],
  );

  return useFormField(fieldProps);
}

export function useFormField<C extends FormControl<any>>(fieldProps: FieldProps<C>) {
  const formControl = fieldProps.control;

  const label = getDynamicValue(formControl, fieldProps.label);
  const labelAlias = getDynamicValue(formControl, fieldProps.labelAlias);
  const labelSuffix = getDynamicValue(formControl, fieldProps.labelSuffix);
  const labelPrefix = getDynamicValue(formControl, fieldProps.labelPrefix);
  const requiredMask = getDynamicValue(formControl, fieldProps.requiredMask);
  const hint = getDynamicValue(formControl, fieldProps.hint);
  const placeholder = getDynamicValue(formControl, fieldProps.placeholder);
  const required = getDynamicValue(formControl, fieldProps.required);
  const readonly = getDynamicValue(formControl, fieldProps.readonly);

  // let disabled = getDynamicValue(formControl, fieldProps.disabled) || formControl.inheritedSubmitting;
  let disabled = formControl.inheritedSubmitting;

  const override = useFieldPropsOverride();

  if (!disabled && override && (override.disabled === true || override.enabled === false)) {
    disabled = true;
  }

  const fieldValue = formControl.value;
  const fieldState = formControl.state;

  formControl.setConfig(
    R.pickBy(
      {
        label,
        required,
        placeholder,
      },
      value => !R.isNil(value),
    ),
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateChanged, setStateChanged] = useState(0);

  useSubscribe(formControl.stateChanges$, () => {
    setStateChanged(Date.now());
  });

  const fieldRequired = formControl.config.required;
  const fieldRequiredMask = R.isBoolean(requiredMask) ? requiredMask : fieldRequired || false;

  const fieldConfig = useMemo(
    () => ({
      label: formControl.config.label,
      required: fieldRequired,
      requiredMask: fieldRequiredMask,
      placeholder: formControl.config.placeholder,
      readonly,
      disabled,
      labelAlias,
      labelSuffix,
      labelPrefix,
      hint,
    }),
    [
      formControl.config.label,
      formControl.config.placeholder,
      fieldRequired,
      fieldRequiredMask,
      readonly,
      disabled,
      labelAlias,
      labelSuffix,
      labelPrefix,
      hint,
    ],
  );

  return { formControl, fieldConfig, fieldValue, fieldState };
}
