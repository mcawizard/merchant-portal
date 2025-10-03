import React, { memo, CSSProperties } from 'react';

export interface LoadingIndicatorProps {
  style?: CSSProperties;
  dotStyle?: CSSProperties;
  size?: number;
}

export const LoadingIndicator = memo((props: LoadingIndicatorProps) => {
  const { size = 10 } = props;
  return (
    <div className="three-bounce-loader" style={props.style}>
      <div style={{ width: size, height: size, ...props.dotStyle }} className="one"></div>
      <div style={{ width: size, height: size, ...props.dotStyle }} className="two"></div>
      <div style={{ width: size, height: size, ...props.dotStyle }} className="three"></div>
    </div>
  );
});
