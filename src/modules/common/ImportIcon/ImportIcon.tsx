import React, { memo } from 'react';
import { Styles } from '@core/utils/css';

export interface ImportIconProps extends React.HTMLProps<HTMLDivElement> {
  icon: string;
}

export const ImportIcon = memo((props: ImportIconProps) => {
  const { icon, className, ...rest } = props;
  return (
    <div className={`d-flex align-items-center justify-content-center ${className}`} {...rest}>
      {/* <img className="img-fluid" src={Styles.assets(`images/import.png`)} /> */}
      <img className="img-fluid" src={`/assets/images/import.png`} />
      <i className={`${icon} import-icon`} style={{ marginRight: 10 }}></i>
    </div>
  );
});
