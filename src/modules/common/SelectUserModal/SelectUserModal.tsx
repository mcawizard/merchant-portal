import React, { memo, useCallback, useMemo } from 'react';
import { FormSelect } from '@core/components/form';
import { Modal, ModalAction, ModalContent, ModalFooter, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { formControl, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { isObservable, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { SelectUserModalBloc } from './SelectUserModalBloc';
import { R } from '@core/utils/r';

function defineUserForm(label?: string, placeholder?: string, userId?: string) {
  return formGroup({
    userId: formControl<string>({
      required: true,
      label,
      placeholder,
      initialValue: userId,
    }),
  });
}

export interface SelectUserModalProps<T = unknown> {
  onSelect(userId: string): Observable<any> | void;
  title?: string;
  button?: string;
  placeholder?: string;
  label?: string;
  userId?: string;
  onlyStaff?: boolean;
  idsToExclude?: string[];
  onCancel?: () => void;
}

export const SelectUserModal = memo(<T,>(props: SelectUserModalProps<T>) => {
  const {
    onSelect,
    title = 'Select User',
    button = 'Select',
    label = 'Select User',
    placeholder,
    userId,
    onlyStaff = true,
    idsToExclude,
    onCancel,
  } = props;
  const bloc = useBloc(SelectUserModalBloc);
  const modal = useModalInstance();
  const users = useObservable(bloc.users$, []);

  const filteredUsers = useMemo(() => {
    if (idsToExclude && idsToExclude.length > 0) {
      return users.filter(u => !idsToExclude.includes(R.toString(u.id)));
    }
    return users;
  }, [users, idsToExclude]);

  const effectiveItems = useMemo(() => filteredUsers, [filteredUsers]);
  const form = useMemo(() => defineUserForm(label, placeholder, userId), [label, placeholder, userId]);

  const onSubmit = useCallback(
    ({ userId }: { userId: string }) => {
      const result = onSelect(userId);
      if (isObservable(result)) {
        return result.pipe(tap(() => modal.close()));
      } else {
        modal.close();
      }
    },
    [modal, onSelect],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth={'sm'}>
      <ModalHeader title={title} />
      <ModalContent formContainer={{ onSubmit: form.submit }}>
        <FormSelect
          items={effectiveItems}
          labelAccessor={item => item.name}
          valueAccessor={item => String(item.id)}
          autoFocus
          control={form.controls.userId}
        />
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={button} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
