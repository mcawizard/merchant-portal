import { useModalInstance } from '@core/components/ModalStack';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Button } from 'antd';
import React, { Fragment, memo, PropsWithChildren, useCallback } from 'react';

export interface GenericTransitionModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}

export const GenericTransitionModal = memo((props: PropsWithChildren<GenericTransitionModalProps>) => {
  const { isOpen, setIsOpen, onClose } = props;
  const modal = useModalInstance();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur transition-opacity dark:bg-black/40" />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter="ease-out transform-gpu transition-transform duration-200"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="ease-in transform-gpu transition-transform duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
        >
          <DialogPanel className="fixed bottom-0 left-0 top-0 flex w-full transform-gpu flex-col rounded-t-2xl  transition-transform duration-200 px-3 bg-agent-overlay">
            <div className="flex justify-center rounded-t-2xl px-2 " onClick={onClose}>
              <Button onClick={onClose} type="text" shape="round">
                <i className="fa-duotone fa-solid fa-xmark-large" />
              </Button>
            </div>
            <div className="h-[calc(100vh-3rem)] rounded-t-2xl overflow-hidden agent-overlay">{props.children}</div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
});
