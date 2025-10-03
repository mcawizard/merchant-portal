import React, { memo } from 'react';

export interface CardTitleProps extends React.HTMLProps<HTMLDivElement> {
  description?: string;
}

export const CardTitle = memo((props: CardTitleProps) => {
  return (
    <>
      <h5 className="text-lg font-medium text-gray-800 dark:text-dark-50">{props.children}</h5>
      {!!props.description && <p className="mt-0.5 text-balance text-sm text-gray-500 dark:text-dark-200">{props.description}</p>}
      <div className="my-3 h-px bg-gray-200 dark:bg-dark-500" />
    </>
  );
});
