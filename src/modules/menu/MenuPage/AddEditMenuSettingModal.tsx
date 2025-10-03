import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState, Validators } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormCheckbox, FormColorPicker, FormContainer, FormInput, FormRadio, FormRadioGroup, FormSelect } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { useBloc } from '@core/utils/bloc';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { of } from 'rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { MenuSettingPageBloc } from './MenuSettingPageBloc';
import { useForm } from 'antd/es/form/Form';
import { Row } from 'reactstrap';
import { EqualWidth } from '@core/components/EqualWidth';

function defineMenuItemForm() {
  return formGroup({
    roles: formControl<string>({
      label: 'Roles',
      required: false,
    }),
    languages: formControl<string>({
      label: 'Languages',
      required: false,
    }),
    homePage: formControl<string>({
      label: 'Home Page',
      required: false,
    }),
    dropdownMenuBackground: formControl<string>({
      label: 'Dropdown Menu Background',
      required: false,
    }),
    menuBorder: formControl<string>({
      label: 'Menu Border',
      required: false,
    }),
    menuBorderColor: formControl<string>({
      label: 'Menu Border Color',
      required: false,
    }),
    shadow: formControl<boolean>({
      label: 'Shadow',
      required: false,
    }),
    isMegaMenu: formControl<boolean>({
      label: '',
      required: false,
      initialValue: false,
    }),
  });
}

export interface AddEditMenuSettingModalProps {
  menuId: string;
  onDone?: () => void;
}

export type IndustryFormData = FormDataType<typeof defineMenuItemForm>;

export const AddEditMenuSettingModal = memo((props: AddEditMenuSettingModalProps) => {
  const { menuId, onDone } = props;
  const modal = useModalInstance();
  const bloc = useBloc(MenuSettingPageBloc, menuId);
  const menu = useNonNilObservable(bloc.menu$);
  const roles = useObservable(bloc.roles$, []);
  const allRoles = useMemo(() => {
    return [{ id: 'all', name: 'All' }, ...roles.map(r => ({ id: `{r.id}`, name: r.name }))];
  }, [roles]);
  const languages = useMemo(() => {
    return [
      { id: 'en', name: 'English' },
      { id: 'es', name: 'Spanish' },
    ];
  }, []);
  const pages = useMemo(() => {
    return [
      { id: 'home', name: 'Home' },
      { id: 'about', name: 'About' },
    ];
  }, []);
  const form = useMemo(() => defineMenuItemForm(), []);
  const loading = useLoadingState(bloc.loading);

  const onSubmit = useCallback(
    (data: IndustryFormData) => {
      return of(null).pipe(
        switchMap(() => {
          return bloc.addSetting(menuId, data);
        }),
        tap(() => onDone && onDone()),
        tap(() => modal.close()),
      );
    },
    [onDone, bloc, menuId, modal],
  );
  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  useEffect(() => {
    if (menu?.extra) {
      form.patchValue(menu.extra);
    }
  }, [form, menu]);

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={'Settings'} />
      <ModalContent loading={loading.loading}>
        <FormContainer onSubmit={form.submit}>
          <Row>
            <FormRadioGroup control={form.controls.isMegaMenu}>
              <FormRadio value={false}>{t`Simple Menu`}</FormRadio>
              <FormRadio value={true}>{t`Mega Menu`}</FormRadio>
            </FormRadioGroup>
          </Row>
          <FormSelect type="multiple" items={allRoles} control={form.controls.roles} labelAccessor={r => r.name} valueAccessor={r => r.id} />
          <FormSelect type="multiple" items={languages} control={form.controls.languages} labelAccessor={r => r.name} valueAccessor={r => r.id} />
          <FormSelect items={pages} control={form.controls.homePage} labelAccessor={r => r.name} valueAccessor={r => r.id} />
          <FormColorPicker control={form.controls.dropdownMenuBackground} />
          <Row>
            <FormInput control={form.controls.menuBorder} />
            <div style={{ marginTop: '10px', marginLeft: '20px' }}>
              <FormColorPicker control={form.controls.menuBorderColor} />
            </div>
          </Row>
          <FormCheckbox control={form.controls.shadow} />
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} disabled={loading.loading} />
      </ModalFooter>
    </Modal>
  );
});
