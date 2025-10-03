import { Endpoint } from '@business/api/endpoint';
import { HTMLService } from '@business/services';
import { FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import JoditEditor, { Jodit } from 'jodit-pro-react';
import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { InputProps } from 'reactstrap';
import { Observable } from 'rxjs';
import { FormInputProps } from './FormInput';
import './form_html.scss';

export function FormHTMLInline<C extends FormControl<any>>(
  props: FormInputProps<C> &
    InputProps & {
      theme?: string;
      readonly?: boolean;
      minHeight?: number;
      media?: (text?: string) => Promise<Observable<string>>;
      autoFocus?: boolean;
      onFocus?: () => void;
      onBlur?: () => void;
      onText?(text: string): void;
      plainText?: boolean;
      list?: any;
    },
) {
  const { autoFocus = false, onText } = props;
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldValue = R.toString(fieldState.value) || '';
  const [isFocused, setIsFocused] = React.useState(false);
  const [myValue, setValue] = React.useState(fieldValue);

  useEffect(() => {
    if (myValue !== fieldValue && !isFocused) {
      setValue(fieldValue);
    }
  }, [myValue, fieldValue, isFocused]);

  const [joditKey, setJoditKey] = React.useState(R.uniqueId('jodit_'));

  const fieldReadonly = fieldConfig.readonly || false;

  const fieldPlaceholder = fieldConfig.placeholder || '';
  useEffect(() => {
    // setValue(fieldValue);
    if (!isFocused) {
      setJoditKey(R.uniqueId('jodit_'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValue]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (isFocused) {
        formControl.setValue(value);
        onText && onText(value);
      }
    },
    [formControl, isFocused, onText],
  );

  const handleBlur = useCallback(
    (txtValue: string) => {
      formControl.onBlur();
      props.onBlur && props.onBlur();
      formControl.setValue(txtValue);
      setTimeout(() => {
        setIsFocused(false);
      }, 250);
    },
    [formControl, props],
  );

  const handleFocus = useCallback(() => {
    formControl.onFocus();
    props.onFocus && props.onFocus();
    setIsFocused(true);
  }, [formControl, props]);

  const joditRef = useRef<Jodit | null>(null);

  const config: Partial<Jodit['options']> = useMemo(() => {
    const headers = Endpoint.dumpHeaders;
    delete headers['Content-Type'];
    delete headers['Accept'];

    return {
      // ...Jodit.defaultOptions,
      disablePlugins: [
        'button-generator',
        'google-maps',
        'google-search',
        'page-break',
        'finder',
        'backup',
        'emoji',
        'keyboard',
        'export-docs',
        'change-case',
        'show-blocks',
        'paste-code',
      ],
      inline: true,
      toolbar: false,
      toolbarInlineForSelection: props.plainText ? false : true,
      placeholder: fieldPlaceholder,
      readonly: props.readonly,
      enableDragAndDropFileToEditor: true,
      saveModeInStorage: true,
      enter: props.plainText ? 'br' : 'div',
      popup: {
        a: null,
        selection: Jodit.atom([
          'paragraph',
          '|',
          'bold',
          'italic',
          'underline',
          '|',
          'font',
          'fontsize',
          'brush',
          'lineHeight',
          '|',
          'ul',
          'ol',
          '|',
          'indent',
          'outdent',
          'left',
          'center',
          'right',
          '|',
          'link',
          'table',
          '|',
          'image',
        ]),
      },
      uploader: {
        // ...Jodit.defaultOptions.uploader,
        headers,
        url: Endpoint.dumpUrl('@root/folder/rte-upload'),
        insertImageAsBase64URI: false,
        imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
        format: 'json',

        isSuccess: resp => {
          handleFocus();
          return resp && resp.success;
        },
      },

      showToolip: true,

      toolbarAdaptive: false,
      colorPickerDefaultTab: 'color',
      preset: 'inline',
      askBeforePasteHTML: false,
      defaultActionOnPaste: 'insert_clear_html',
      allowResizeX: true,
      buttons: Jodit.atom(['bold', 'italic']),
      theme: props.theme || 'default',
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      autofocus: autoFocus,
      events: {
        afterInit(instance: Jodit) {},
        focus() {
          handleFocus();
        },
        click() {
          handleFocus();
        },
      },
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldPlaceholder, fieldReadonly, props.minHeight, props.list, props.theme, autoFocus]);

  return (
    <div className="jodit-inline" style={{ flex: 1 }}>
      {!!props.readonly && HTMLService.toReact(fieldValue)}
      {!props.readonly && (
        <JoditEditor key={joditKey} config={config as any} ref={joditRef} onBlur={handleBlur} onChange={handleChangeText} value={myValue} />
      )}
    </div>
  );
}
