import { classnames, CssProp, Theme } from '@core/utils/css';
import { css } from '@emotion/react';
import React, { FormEventHandler, FormHTMLAttributes, memo, PropsWithChildren, useCallback } from 'react';

const style = css`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root,
  .MuiFormControlLabel-root {
    .MuiSvgIcon-root {
      width: 24px;
      height: 24px;
    }

    .MuiFormLabel-root,
    .MuiInputBase-input {
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      color: #778691;
    }

    .MuiInputBase-input {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.87);
    }

    .MuiFormControlLabel-label {
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      color: #778691;
    }

    .MuiFormLabel-root.Mui-error {
      color: ${Theme.dangerColor};
    }

    .MuiInputLabel-root.MuiInputLabel-shrink.Mui-focused {
      color: #10578e;
    }

    .MuiInputLabel-root.MuiInputLabel-shrink {
      color: #2873ac;
    }

    .MuiInputLabel-asterisk {
      color: ${Theme.dangerColor};
    }

    .MuiInput-underline:before {
      border-color: #d8e6f0;
    }

    .MuiInput-underline:after {
      border-color: #7eabcd;
    }

    .MuiInput-underline.Mui-error:after {
      border-color: ${Theme.dangerColor};
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-color: #7eabcd;
    }
  }

  &,
  .form_line,
  .MuiAutocomplete-root {
    > .MuiFormControl-root,
    > .MuiFormControlLabel-root {
      margin-top: 5px;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
  }

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -7px;
  }

  .form_line {
    display: flex;
    flex-direction: row;

    > .MuiFormControl-root,
    > .MuiFormControlLabel-root {
      flex: 1;
      margin-left: 20px;
      margin-right: 20px;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export interface FormContainerProps extends FormHTMLAttributes<HTMLFormElement> {
  customCss?: CssProp;
  onSubmit?(): void;
}

export const FormContainer = memo((props: PropsWithChildren<FormContainerProps>) => {
  const { customCss, onSubmit, className, children, ...rest } = props;

  const handleSubmit: FormEventHandler = useCallback(
    event => {
      event.preventDefault();
      if (onSubmit) onSubmit();
    },
    [onSubmit],
  );

  return (
    <form {...rest} className={classnames('form_container', className)} css={[style, props.customCss]} onSubmit={handleSubmit}>
      {children}
    </form>
  );
});

export const FormLine = memo((props: PropsWithChildren<{}>) => {
  return <div className="form_line">{props.children}</div>;
});
