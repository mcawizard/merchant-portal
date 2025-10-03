import React, { memo, ReactNode, CSSProperties, Fragment } from 'react';
import { R } from '@core/utils/r';
import { UncontrolledTooltip } from 'reactstrap';

export interface TextBlockProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  children: ReactNode | string;
  className?: string;
  classNameTitle?: string;
  classNameChildren?: string;
  style?: CSSProperties;
  div?: boolean;
  flexRow?: boolean;
  id?: number;
}

export const TextBlock = memo((props: TextBlockProps) => {
  const { title, description, div = false, flexRow = false, id } = props;
  return (
    <div className={`d-flex ${flexRow ? 'flex-row' : 'flex-column'} ${props.className}`} style={props.style || { flex: 1 }}>
      {!!title && (
        <p className={`text-muted mb-2 ${props.classNameTitle}`}>
          {title}
          {!!description && (
            <Fragment>
              <i className="fas fa-question-circle ml-2" id={`control-description-${id}`}></i>
              <UncontrolledTooltip placement="top" target={`control-description-${id}`}>
                {description}
              </UncontrolledTooltip>
            </Fragment>
          )}
        </p>
      )}
      {div && <div className={`mb-0 font-size-12 ${props.classNameChildren}`}>{props.children}</div>}
      {!div && <h5 className={`mb-0 font-size-12 ${props.classNameChildren}`}>{props.children}</h5>}
    </div>
  );
});
