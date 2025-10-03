import { Control } from './Control';

export enum ValidationStatus {
  valid = 'valid',
  invalid = 'invalid',
  pending = 'pending',
}

export interface StateChanges {
  value?: boolean;

  focused?: boolean;
  touched?: boolean;
  dirty?: boolean;
  modified?: boolean;

  status?: boolean;
  errors?: boolean;

  submitting?: boolean;
  submitted?: boolean;

  required?: boolean;

  parentControl?: ExternalStateChanges;
  childControl?: ExternalStateChanges;
  linkedControl?: ExternalStateChanges;
}

export interface ExternalStateChanges {
  control: Control;
  stateChanges: StateChanges;
}

export interface EmitStateOptions {
  emit?: boolean;
  onlySelf?: boolean;
  notifyParentControl?: boolean;
  notifyLinkedControls?: boolean;
}

export interface ResetControlOptions extends EmitStateOptions {
  stateChanges?: StateChanges;
}
