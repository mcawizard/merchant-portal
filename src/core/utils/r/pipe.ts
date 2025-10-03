import { lfp } from './lodash';

export function pipe<T1, T2>(value: T1, op1: (input: T1) => T2): T2;

export function pipe<T1, T2, T3>(value: T1, op1: (input: T1) => T2, op2: (input: T2) => T3): T3;

export function pipe<T1, T2, T3, T4>(value: T1, op1: (input: T1) => T2, op2: (input: T2) => T3, op3: (input: T3) => T4): T4;

export function pipe<T1, T2, T3, T4, T5>(
  value: T1,
  op1: (input: T1) => T2,
  op2: (input: T2) => T3,
  op3: (input: T3) => T4,
  op4: (input: T4) => T5,
): T5;

export function pipe<T1, T2, T3, T4, T5, T6>(
  value: T1,
  op1: (input: T1) => T2,
  op2: (input: T2) => T3,
  op3: (input: T3) => T4,
  op4: (input: T4) => T5,
  op5: (input: T5) => T6,
): T6;

export function pipe<T1, T2, T3, T4, T5, T6, T7>(
  value: T1,
  op1: (input: T1) => T2,
  op2: (input: T2) => T3,
  op3: (input: T3) => T4,
  op4: (input: T4) => T5,
  op5: (input: T5) => T6,
  op6: (input: T6) => T7,
): T7;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  value: T1,
  op1: (input: T1) => T2,
  op2: (input: T2) => T3,
  op3: (input: T3) => T4,
  op4: (input: T4) => T5,
  op5: (input: T5) => T6,
  op6: (input: T6) => T7,
  op7: (input: T7) => T8,
): T8;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  value: T1,
  op1: (input: T1) => T2,
  op2: (input: T2) => T3,
  op3: (input: T3) => T4,
  op4: (input: T4) => T5,
  op5: (input: T5) => T6,
  op6: (input: T6) => T7,
  op7: (input: T7) => T8,
  op8: (input: T8) => T9,
): T9;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  value: T1,
  op1: (input: T1) => T2,
  op2: (input: T2) => T3,
  op3: (input: T3) => T4,
  op4: (input: T4) => T5,
  op5: (input: T5) => T6,
  op6: (input: T6) => T7,
  op7: (input: T7) => T8,
  op8: (input: T8) => T9,
  op9: (input: T9) => T10,
): T9;

export function pipe(value: any, ...opts: Function[]): any {
  return lfp.flow.call(null, opts as any)(value);
}
