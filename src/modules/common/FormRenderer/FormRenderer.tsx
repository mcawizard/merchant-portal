import { FormResponse } from '@business/entities/form';
import { FormsResponse } from '@business/entities/forms';
import {
  FormCheckboxGroup,
  FormCheckboxGruped,
  FormDateInput,
  FormHTML,
  FormInput,
  FormInputPhone,
  FormRadio,
  FormRadioGroup,
  FormSelect,
  FormUpload,
} from '@core/components/form';
import { FormArray, formArray, formControl, FormControl, FormDataType, formGroup, FormGroup, Validators } from '@core/utils/form';
import React, { Fragment, memo, useMemo } from 'react';
import { CardTitle, Label, UncontrolledTooltip } from 'reactstrap';
import { FCFormDataType, FCType } from '../FormBuilder/FormFields/types';
import {
  FCCheckboxFormData,
  FCDateFormData,
  FCDescriptionFormData,
  FCDropdownFormData,
  FCParagraphFormData,
  FCPhoneFormData,
  FCRadioFormData,
  FCTextFormData,
  FCTitleFormData,
  FCUploadFormData,
} from '../FormBuilder/FormFields';
import { R } from '@core/utils/r';
import { UploadResponse } from '@business/entities/common';
import { HTMLService } from '@business/services';
import { FormRepeatingStep } from '@modules/data/forms/FormViewModal/FormRepeatingStep';
import { FCRepeaterFormData } from '../FormBuilder/FormFields/FCRepeater';
import { Button } from '@core/components/Button';

// export interface CustomFieldsRendererProps {
//   fields: CustomFieldResponse[];
//   form: FormGroup<any>;
// }

// export const CustomFieldsRenderer = memo((props: CustomFieldsRendererProps) => {
//   const { fields, form } = props;
//   return (
//     <div>
//       {fields.map(field => (
//         <FieldRenderer key={field.id} field={field} control={form.controls[field.id]} />
//       ))}
//     </div>
//   );
// });

export interface FormFieldRendererProps {
  control: FormControl<any> | FormArray<any>;
  field: FCFormDataType;
  index: number;
}

export const FormFieldRenderer = memo((props: FormFieldRendererProps) => {
  const { control, field, index } = props;

  if (!field || !control) return null;

  const inControl = control as FormControl<any>;

  switch (field.type) {
    case FCType.text:
    case FCType.email: {
      return <FormInput key={index} control={inControl} description={R.get(field, 'description')} />;
    }
    case FCType.date: {
      return <FormDateInput key={index} control={inControl} description={R.get(field, 'description')} />;
    }
    case FCType.paragraph: {
      return <FormHTML control={inControl} description={R.get(field, 'description')} />;
    }

    case FCType.dropdown: {
      const f = field as FCDropdownFormData;
      const options = f.options.split('\n');
      return (
        <FormSelect
          type={f.addMultiple ? 'multiple' : 'single'}
          control={inControl}
          items={options}
          key={index}
          labelAccessor={l => l}
          valueAccessor={l => l}
          tooltip={R.get(field, 'description')}
        />
      );
    }
    case FCType.upload: {
      console.log(field, inControl);
      return <FormUpload type={'single'} control={inControl} uploadPath="forms/" />;
    }
    case FCType.phone: {
      return <FormInputPhone key={index} control={inControl} />;
    }
    case FCType.checkbox: {
      const f = field as FCCheckboxFormData;
      const items = f.options.split('\n');
      return (
        <Fragment key={index}>
          <Label>{f.title}</Label>
          <FormCheckboxGroup control={inControl}>
            {items.map((option, order) => {
              return <FormCheckboxGruped label={option} value={option} key={order} />;
            })}
          </FormCheckboxGroup>
        </Fragment>
      );
    }
    case FCType.radio: {
      const f = field as FCRadioFormData;
      const items = f.options.split('\n');
      return (
        <div key={index}>
          <Label className="mb-2">{f.title}</Label>
          <FormRadioGroup control={inControl}>
            {items.map((option, order) => {
              return (
                <FormRadio value={option} key={order}>
                  {option}
                </FormRadio>
              );
            })}
          </FormRadioGroup>
        </div>
      );
    }
    case FCType.desciption: {
      const f = field as FCDescriptionFormData;
      return HTMLService.toReact(f.description);
    }
    case FCType.title: {
      const f = field as FCTitleFormData;
      return (
        <div className="mt-4">
          <CardTitle>{f.title}</CardTitle>
        </div>
      );
    }
    case FCType.repeater: {
      return <FormRepeatingStep form={inControl as any as FormArray<any>} field={field as any as FCRepeaterFormData} />;
    }
    default:
      return null;
  }
});

function getFieldControl(field: FCFormDataType) {
  if (field.type === FCType.text) {
    const f = field as FCTextFormData;
    return formControl<string>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
      validators: [Validators.min(f.minValueLength)],
    });
  } else if (field.type === FCType.date) {
    const f = field as FCDateFormData;
    return formControl<number>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
    });
  } else if (field.type === FCType.email) {
    const f = field as FCTextFormData;
    return formControl<string>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
      validators: [Validators.email],
    });
  } else if (field.type === FCType.paragraph) {
    const f = field as FCParagraphFormData;
    return formControl<string>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
      validators: [Validators.min(f.minValueLength)],
    });
  } else if (field.type === FCType.dropdown) {
    const f = field as FCDropdownFormData;
    if (f.addMultiple) {
      return formControl<string[]>({
        required: f.isRequired,
        label: f.title,
        placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
      });
    }
    return formControl<string>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
    });
  } else if (field.type === FCType.upload) {
    const f = field as FCUploadFormData;
    return formControl<UploadResponse>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
    });
  } else if (field.type === FCType.phone) {
    const f = field as FCPhoneFormData;
    return formControl<string>({
      required: f.isRequired,
      label: f.title,
      placeholder: !R.isEmpty(f.placeholder) ? f.placeholder : undefined,
    });
  } else if (field.type === FCType.checkbox) {
    const f = field as FCCheckboxFormData;
    return formControl<string[]>({
      required: f.isRequired,
      label: f.title,
    });
  } else if (field.type === FCType.radio) {
    const f = field as FCRadioFormData;
    return formControl<string>({
      required: f.isRequired,
      label: f.title,
    });
  } else if (field.type === FCType.desciption) {
    return formControl<string>({});
  } else if (field.type === FCType.title) {
    return formControl<string>({});
  } else if (field.type === FCType.repeater) {
    return formArray(() => defineRepeaterForm((field as any).items));
  }

  return formControl<string>({});
}

function defineRepeaterForm(fields: FCFormDataType[]): any {
  return formGroup({
    ...R.fromPairs(fields.map((field, index) => [`${index}`, getFieldControl(field)])),
  });
}

export function defineCustomForm(fields: FCFormDataType[]) {
  return formGroup({
    ...R.fromPairs(fields.map((field, index) => [`${index}`, getFieldControl(field)])),
  });
}
export type CustomFormData = FormDataType<typeof defineCustomForm>;

export interface FormRendererProps {
  form: FormsResponse;
}
export const FormRenderer = memo((props: FormRendererProps) => {
  const { form: dbForm } = props;
  const form = useMemo(() => defineCustomForm(dbForm.fields), [dbForm]);

  return (
    <>
      {dbForm.fields.map((field, index) => (
        <FormFieldRenderer index={index} key={index} field={field} control={form.controls[`${index}`]} />
      ))}
      <Button>{dbForm.titleSubmitButton}</Button>
    </>
  );
});
