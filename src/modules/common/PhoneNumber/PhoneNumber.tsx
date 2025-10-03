import { R } from '@core/utils/r';
import React, { HTMLAttributes, memo, useMemo, useState } from 'react';
import parsePhoneNumber from 'libphonenumber-js';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { CommonService } from '@business/services';
export interface PhoneNumberProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children?: string;
  showFlag?: boolean;
  copy?: boolean;
}

export const PhoneNumber = memo((props: PhoneNumberProps) => {
  const { children, showFlag = false, copy = false, ...rest } = props;
  const [isHover, setHover] = useState(false);
  const content = useMemo(() => {
    if (!children || R.isEmpty(children)) {
      return null;
    }

    const phoneNumber = parsePhoneNumber(children, 'US');
    if (phoneNumber) {
      if (phoneNumber.country && showFlag && getUnicodeFlagIcon(phoneNumber.country)) {
        return getUnicodeFlagIcon(phoneNumber.country) + ' ' + phoneNumber.formatNational();
      }

      return phoneNumber.formatNational();
    }

    return children;
  }, [children, showFlag]);

  return (
    <span {...rest} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {content}
      {isHover && copy && !R.isEmpty(children) && (
        <i
          onClick={() => {
            CommonService.copyToClipboard(children || '');
          }}
          className="ml-2 fa-light fa-copy"
          style={{ cursor: 'pointer' }}
        ></i>
      )}
    </span>
  );
});
