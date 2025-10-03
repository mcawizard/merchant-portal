import { Endpoint } from '@business/api/endpoint';
import { FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import JoditEditor, { Jodit } from 'jodit-pro-react';
import React, { useCallback, useMemo, useRef, Fragment } from 'react';
import { FormInputProps, FormStringInputProps } from './FormInput';
import './form_html.scss';
import { RTEUploadResponse } from '@business/entities/common';
import { Form } from 'antd';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
type IJodit = any;

export const __editors: Record<string, IJodit> = {};

export function FormHTML<C extends FormControl<any>>(
  props: FormInputProps<C> & {
    tooltip?: string;
    noMinimumHeight?: boolean;
    minHeight?: number;
    maxHeight?: number;
    height?: number;
    autoFocus?: boolean;
    spellcheck?: boolean;
    statusBar?: boolean;
    disabled?: boolean;
    onBlur?: () => void;
  },
) {
  const { tooltip, autoFocus = false, noMinimumHeight = false, statusBar = true } = props;
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldValue = R.toString(fieldState.value) || '';

  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldReadonly = fieldConfig.readonly || false;

  const fieldPlaceholder = fieldConfig.placeholder || '';

  const handleChangeText = useCallback(
    (value: string) => {
      formControl.setValue(value);
    },
    [formControl],
  );

  const handleBlur = useCallback(
    (value: string) => {
      formControl.setValue(value);
      formControl.onBlur();
      props.onBlur && props.onBlur();
    },
    [formControl, props],
  );

  const joditHeight = useMemo(() => {
    return props.height || (noMinimumHeight ? null : 300);
  }, [noMinimumHeight, props.height]);

  const joditRef = useRef<Jodit | null>(null);

  // @ts-ignore
  const config: IJodit['options'] = useMemo(() => {
    const headers = Endpoint.dumpHeaders;
    delete headers['Content-Type'];
    delete headers['Accept'];

    return {
      ...Jodit.defaultOptions,
      disablePlugins: [
        'button-generator',
        'google-maps',
        'google-search',
        'page-break',
        'finder',
        'backup',
        'highlight-signature',
        'emoji',
        'keyboard',
        'export-docs',
        'change-case',
        'show-blocks',
        'paste-code',
        'translate',
        'mobile-view',
      ],

      buttons: [
        'source',
        '|',
        'bold',
        'italic',
        'underline',
        'eraser',
        '|',
        'ul',
        'ol',
        '|',
        'fontsize',
        'font',
        'brush',
        'paragraph',
        '|',
        'indent',
        'outdent',
        'align',
        '|',
        'link',
        'image',
        'video',
        '|',
        'fullsize',
      ],
      placeholder: fieldPlaceholder,
      minHeight: props.minHeight || (noMinimumHeight ? null : 300),
      ...(joditHeight && { height: joditHeight }),
      maxHeight: props.maxHeight,
      readonly: fieldReadonly,
      allowResizeY: true,
      enableDragAndDropFileToEditor: true,
      saveModeInStorage: true,
      enter: 'div',
      uploader: {
        // ...Jodit.defaultOptions.uploader,
        headers: headers,
        url: Endpoint.dumpUrl('@root/../common/rte-upload'),
        insertImageAsBase64URI: false,
        imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
        format: 'json',
        defaultHandlerSuccess: function (data: RTEUploadResponse) {
          let i;
          if (data.files && data.files.length)
            if (data && data.files && data.files.length) {
              for (i = 0; i < data.files.length; i += 1) {
                if (R.get(data.isImages, i) === true) {
                  //   __editors[formControl.uid].selection.insertImage(data.baseurl + data.files[i], 250, 250, 'ss');
                  __editors[formControl.uid].selection.insertHTML(
                    `<img style="max-width: 100%" class="img-fluid" src="${data.baseurl + data.files[i]}" />`,
                  );
                } else {
                  const fileName = data.names[i];
                  const fileUrl = data.baseurl + data.files[i];

                  __editors[formControl.uid].selection.insertHTML(`<a class="rte-file-link" href="${fileUrl}" target="_blank">${fileName}</a>`);
                }
              }
            }
        },
      },
      askBeforePasteHTML: false,
      defaultActionOnPaste: 'insert_clear_html',
      showToolip: true,
      colorPickerDefaultTab: 'color',
      theme: 'gc',
      spellcheck: props.spellcheck,
      autofocus: autoFocus,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      events: {
        afterInit(instance: any) {
          __editors[formControl.uid] = instance;
        },
      },
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldPlaceholder, fieldReadonly, props.minHeight, autoFocus]);

  return (
    <Form.Item
      tooltip={tooltip}
      label={fieldConfig.label}
      labelAlign={'left'}
      validateStatus={fieldError ? 'error' : ''}
      help={fieldError}
      labelCol={{ span: 24 }}
      required={fieldConfig.required || false}
    >
      <ErrorBoundary>
        <JoditEditor ref={joditRef} config={config} onBlur={handleBlur} value={fieldValue} />
      </ErrorBoundary>
    </Form.Item>
  );
}
