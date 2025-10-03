import { FormInput } from '@core/components/form';
import { Modal, ModalAction, ModalContent, ModalFooter, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { formControl, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import React, { memo, useCallback, useMemo, Fragment } from 'react';
import { isObservable, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormHTML } from '@core/components/form/FormHTML';

function defineGenericInputForm(label?: string, placeholder?: string, initialValue?: string, desc?: DescProps) {
  return formGroup({
    input: formControl<string>({
      required: true,
      label,
      placeholder,
      initialValue,
    }),
    description: formControl<string>({
      required: desc?.required,
      label: desc?.label,
      placeholder: desc?.placeholder,
      initialValue: desc?.initialValue,
    }),
  });
}

interface DescProps {
  placeholder?: string;
  label?: string;
  initialValue?: string;
  required?: boolean;
  html?: boolean;
}
export interface GenericInputModalProps {
  onSubmit(input: string, description: string): Observable<any> | void;
  button?: string;
  title: string;
  placeholder?: string;
  label?: string;
  initialValue?: string;
  multiline?: boolean;
  html?: boolean;
  autoFocus?: boolean;
  description?: DescProps;
}

export const GenericInputModal = memo((props: GenericInputModalProps) => {
  const { title, button = 'Save', label, placeholder, multiline = false, initialValue, description, autoFocus = true } = props;
  const modal = useModalInstance();
  const form = useMemo(() => defineGenericInputForm(label, placeholder, initialValue, description), [label, placeholder, initialValue, description]);
  const onSubmit = useCallback(
    ({ input, description }) => {
      const result = props.onSubmit(input, description);
      if (isObservable(result)) {
        return result.pipe(tap(() => modal.close()));
      } else {
        modal.close();
      }
    },
    [modal, props],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth={props.html ? 'md' : 'sm'}>
      <ModalHeader title={title} />
      <ModalContent formContainer={{ onSubmit: form.submit }}>
        {!props.html && <FormInput type={multiline ? 'textarea' : undefined} autoFocus={autoFocus} control={form.controls.input} />}
        {!!props.html && <FormHTML control={form.controls.input} />}
        {!!description && (
          <Fragment>
            {!description.html && <FormInput type={'textarea'} control={form.controls.description} />}
            {description.html && <FormHTML control={form.controls.description} />}
          </Fragment>
        )}
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={button} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
