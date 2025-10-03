import { R } from '@core/utils/r';
import React, { Fragment, memo, ReactElement, ReactNode, useMemo, useEffect } from 'react';
import { UncontrolledTooltip, UncontrolledTooltipProps, Tooltip } from 'reactstrap';

export interface WithTooltipProps extends Omit<UncontrolledTooltipProps, 'target'> {
  tooltip: ReactNode;
  key?: string;
  children: ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export const WithTooltip = memo((props: WithTooltipProps) => {
  const { tooltip, key, children, placement = 'top', ...rest } = props;
  const [preloadTooltip, setPreloadTooltip] = React.useState<string | Element | Element[] | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const inKey = useMemo(() => {
    return key || `tooltip-control-${R.random(1, 99999)}`;
  }, [key]);

  const inChildren = useMemo(() => {
    const inputReactObject = React.Children.only(children);
    const clonedChild = React.cloneElement(inputReactObject, {
      id: inKey,
    });

    return clonedChild;
  }, [children, inKey]);

  if (props.fetch) {
    return (
      <Fragment>
        {inChildren}
        {!R.isEmpty(props.tooltip) && (
          <Tooltip isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} target={inKey} placement={placement} {...rest}></Tooltip>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {inChildren}
      {!R.isEmpty(props.tooltip) && (
        <UncontrolledTooltip target={inKey} placement={placement} {...rest}>
          {props.tooltip}
        </UncontrolledTooltip>
      )}
    </Fragment>
  );
});
