import { ExoticComponent } from 'react';
import { FCRepeaterFormData, FCRepeaterForm, FCRepeater, defineRepeaterForm } from './FCRepeater';
import { FCProcess, defineProcessForm, FCProcessForm, FCProcessFormData } from './FCProcess';
import { FCText, FCTextForm, FCTextFormData, defineTextForm } from './FCText';
import { FCDate, FCDateForm, FCDateFormData, defineDateForm } from './FCDate';
import { FCEmail, FCEmailForm, FCEmailFormData, defineEmailForm } from './FCEmail';
import { FCParagraph, FCParagraphForm, FCParagraphFormData, defineParagraphForm } from './FCParagraph';
import { FCRadio, FCRadioForm, FCRadioFormData, defineRadioForm } from './FCRadio';
import { FCDropdown, FCDropdownForm, FCDropdownFormData, defineDropdownForm } from './FCDropdown';
import { FCCheckbox, FCCheckboxForm, FCCheckboxFormData, defineCheckboxForm } from './FCCheckbox';
import { FCUpload, FCUploadForm, FCUploadFormData, defineUploadForm } from './FCUpload';
import { FCPhone, FCPhoneForm, FCPhoneFormData, definePhoneForm } from './FCPhone';
import { FCDescriptionFormData, FCDescriptionForm, FCDescription, defineDescriptionForm } from './FCDescription';
import { FCTitleFormData, FCTitleForm, FCTitle, defineTitleForm } from './FCTitle';
import { defineGridForm, FCGrid } from './FCGrid';

export type FCFormType =
  | FCTextForm
  | FCDateForm
  | FCEmailForm
  | FCParagraphForm
  | FCRadioForm
  | FCDropdownForm
  | FCCheckboxForm
  | FCUploadForm
  | FCPhoneForm
  | FCDescriptionForm
  | FCTitleForm
  | FCProcessForm
  | FCRepeaterForm;

export type FCFormDataType =
  | FCTextFormData
  | FCDateFormData
  | FCEmailFormData
  | FCParagraphFormData
  | FCRadioFormData
  | FCDropdownFormData
  | FCCheckboxFormData
  | FCUploadFormData
  | FCPhoneFormData
  | FCDescriptionFormData
  | FCTitleFormData
  | FCProcessFormData
  | FCRepeaterFormData;

export interface FCData<P> {
  component: ExoticComponent<P>;
  title: string;
  form: FCFormType;
}

export enum FCType {
  checkbox = 'checkbox',
  date = 'date',
  dropdown = 'dropdown',
  email = 'email',
  paragraph = 'paragraph',
  phone = 'phone',
  radio = 'radio',
  text = 'text',
  upload = 'upload',
  desciption = 'description',
  title = 'title',
  process = 'process',
  repeater = 'repeater',
  grid = 'grid',
  // function = 'function',
}

export const AllFC = [
  FCType.text,
  FCType.date,
  FCType.email,
  FCType.paragraph,
  FCType.radio,
  FCType.dropdown,
  FCType.checkbox,
  FCType.upload,
  FCType.phone,
  FCType.desciption,
  FCType.title,
  FCType.repeater,
  FCType.grid,
];

export const getFormData = (type: FCType) => {
  switch (type) {
    case FCType.text:
      return { title: 'Single Line Text', component: FCText, form: defineTextForm() };
    case FCType.date:
      return { title: 'Date Selector', component: FCDate, form: defineDateForm() };
    case FCType.email:
      return { title: 'Email', component: FCEmail, form: defineEmailForm() };
    case FCType.paragraph:
      return { title: 'Paragraph', component: FCParagraph, form: defineParagraphForm() };
    case FCType.radio:
      return { title: 'Radio Buttons', component: FCRadio, form: defineRadioForm() };
    case FCType.dropdown:
      return { title: 'Drop Down', component: FCDropdown, form: defineDropdownForm() };
    case FCType.checkbox:
      return { title: 'Checkboxes', component: FCCheckbox, form: defineCheckboxForm() };
    case FCType.upload:
      return { title: 'Upload', component: FCUpload, form: defineUploadForm() };
    case FCType.phone:
      return { title: 'Phone Number', component: FCPhone, form: definePhoneForm() };
    case FCType.desciption:
      return { title: 'Text Description', component: FCDescription, form: defineDescriptionForm() };
    case FCType.title:
      return { title: 'Form Section', component: FCTitle, form: defineTitleForm() };
    // case FCType.process:
    //   return { title: 'Process Step (Repeating)', component: FCProcess, form: defineProcessForm() };
    case FCType.repeater:
      return { title: 'Repeater', component: FCRepeater, form: defineRepeaterForm() };
    case FCType.grid:
      return { title: 'Grid', component: FCGrid, form: defineGridForm() };
  }
};
