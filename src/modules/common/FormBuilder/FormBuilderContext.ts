import { createContext, useContext } from 'react';
import { R } from '@core/utils/r';
import { FCData } from './FormFields/types';

export interface FormBuilderData {
  items: FCData<any>[];
  setItems: React.Dispatch<React.SetStateAction<FCData<any>[]>>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const FormBuilderContext = createContext<FormBuilderData>({ items: [], setItems: R.noop, selectedIndex: -1, setSelectedIndex: R.noop });

export function useFormBuilderContext() {
  return useContext(FormBuilderContext);
}
