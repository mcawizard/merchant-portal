import { R } from '@core/utils/r';
import { ValidationError } from '../../validation';
import { ValidationStatus } from './types';

export type ControlErrors = Record<string, ValidationError> & { errors?: ControlErrors[] };

export abstract class ControlState<T = any> {
  public abstract get value(): T;

  public abstract get focused(): boolean;
  public abstract get touched(): boolean;
  public abstract get dirty(): boolean;
  public abstract get modified(): boolean;

  public abstract get status(): ValidationStatus;

  public abstract get errors(): ControlErrors | null;
  public abstract get errorMessage(): string | null;

  public abstract get submitting(): boolean;
  public abstract get inheritedSubmitting(): boolean;
  public abstract get submitted(): boolean;
  public abstract get inheritedSubmitted(): boolean;

  public get unfocused() {
    return !this.focused;
  }

  public get untouched() {
    return !this.touched;
  }

  public get pristine() {
    return !this.dirty;
  }

  public get unmodified() {
    return !this.modified;
  }

  public get valid() {
    return this.status === ValidationStatus.valid;
  }

  public get pending() {
    return this.status === ValidationStatus.pending;
  }

  public get invalid() {
    return this.status === ValidationStatus.invalid;
  }

  public get error() {
    return R.values(this.errors)[0] || null;
  }
}
