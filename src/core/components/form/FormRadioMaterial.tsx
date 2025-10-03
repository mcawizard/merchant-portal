import React, { CSSProperties, ReactNode, Fragment } from 'react';
import { FormControl, useFormField, FieldProps } from '@core/utils/form';
import { FormRadioGroupProps, Context } from './FormRadio';
import { FormControlLabel, Radio } from '@mui/material';

export interface FormRadioMaterialProps<V = any> {
  value: V;
  label?: React.ReactNode;
  disabled?: boolean;
  onPress?(value: V): void;
  style?: CSSProperties;
  onItemRender?(value: V, isSelected: boolean, onPress: () => void): ReactNode;
}
const theme = {
  overrides: {
    MuiRadio: {
      root: {
        color: 'white',
      },
      colorSecondary: {
        '&$checked': {
          color: 'white',
        },
      },
    },
  },
};

function FormRadioComponent<V = any>(props: FormRadioMaterialProps<V>) {
  const context = React.useContext(Context);
  const { formControl, fieldState, fieldConfig } = useFormField(context && context.props!);

  const onPress = React.useCallback(() => {
    formControl.setValue(props.value);
    if (props.onPress) props.onPress(props.value);
  }, [formControl, props]);

  const active = fieldState && fieldState.value === props.value;

  const disabled = fieldConfig.disabled || props.disabled || false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = !!fieldState.errors;

  if (props.onItemRender) {
    return <Fragment>{props.onItemRender(props.value, active, onPress)}</Fragment>;
  }
  return (
    <React.Fragment>
      <div className={`custom-control custom-radio custom-radio-primary`} style={props.style}>
        <FormControlLabel
          style={{ fontFamily: 'Poppins' }}
          control={
            <Radio
              sx={{ color: 'white' }}
              checked={active}
              onChange={onPress}
              disabled={disabled}
              name={formControl.uid}
              id={`${formControl.uid}-${props.value}`}
              color="default"
              classes={{ colorPrimary: '#FFF' }}
            />
          }
          label={props.label}
        />
      </div>
    </React.Fragment>
  );
}

export class FormRadioMaterial<V = any> extends React.PureComponent<FormRadioMaterialProps<V>> {
  public render() {
    return <FormRadioComponent {...this.props} />;
  }
}
