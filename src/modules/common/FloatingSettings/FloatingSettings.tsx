import React, { memo } from 'react';

export interface FloatingSttingsProps {
  onClick?: () => void;
}

export const FloatingSttings = memo((props: FloatingSttingsProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      color="primary"
      className="btn-base btn shrink-0 p-0 this:primary bg-this text-white hover:bg-this-darker focus:bg-this-darker active:bg-this-darker/90 disabled:bg-this-light dark:disabled:bg-this-darker fixed top-1/2 z-50 size-9 rounded-full ltr:right-0 ltr:rounded-r-none rtl:left-0 rtl:rounded-l-none"
    >
      <i className="fa-duotone fa-solid fa-gear animate-spin"></i>
    </button>
  );
});
