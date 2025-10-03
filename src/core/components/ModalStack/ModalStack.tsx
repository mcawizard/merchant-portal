import React, { ComponentType, createContext, Fragment, memo, MemoExoticComponent, ReactNode, useContext, useState } from 'react';

let _state: [ReactNode[], (modals: ReactNode[]) => void];
let _modalIntances: ModalInstance[] = [];
export interface ModalInstance {
  close(): void;
  props?: ModalProps;
}

export interface ModalProps {
  name: string;
  id: string;
}

export interface AllModelContext {
  closeAll(): void;
}

const ModalContext = createContext<ModalInstance | null>(null);

const AllModelContext = createContext<AllModelContext | null>(null);

export function openModal<C extends MemoExoticComponent<ComponentType<any>>, P extends ModalProps>(
  Component: C,
  props: C extends MemoExoticComponent<infer T> ? (T extends ComponentType<infer P> ? P : never) : never,
  modalProps?: P,
): ModalInstance {
  const index = _state ? _state[0].length : 0;

  const instance: ModalInstance = {
    close: () => {
      const modals = _state[0].filter((_, i) => i !== index);
      _modalIntances = _modalIntances.filter((_, i) => i !== index);
      _state[0] = modals;
      if (_state) _state[1](modals);
    },
    props: modalProps,
  };

  const modals = _state[0].concat(
    <ModalContext.Provider key={index} value={instance}>
      <Component {...(props as any)} />
    </ModalContext.Provider>,
  );

  _state[0] = modals;
  if (_state) _state[1](modals);
  _modalIntances.push(instance);

  return instance;
}

export function findModalByName(name: string) {
  return _modalIntances.find(m => m.props && m.props.name === name);
}

export function useOptionalModalInstance() {
  return useContext(ModalContext);
}

export function useAllModelContext() {
  return useContext(AllModelContext)!;
}

export function useModalInstance() {
  const instance = useOptionalModalInstance();

  if (!instance) throw new Error('[useModalInstance] no modal instance found');
  return instance;
}

export const ModalStack = memo(() => {
  const [modals, setModals] = useState<ReactNode[]>([]);

  _state = [modals, setModals];
  const closeAll = () => {
    setModals([]);
  };

  return <AllModelContext.Provider value={{ closeAll }}>{modals}</AllModelContext.Provider>;
});
