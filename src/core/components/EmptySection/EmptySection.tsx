import React, { memo, useMemo, Fragment, PropsWithChildren, CSSProperties } from 'react';
import { CardBody, Card, Button } from 'reactstrap';

export interface EmptySectionProps {
  title?: string;
  description?: string;
  icon?: string;
  iconStyle?: CSSProperties;
  card?: boolean;
  actionTitle?: string;
  action?(): void;
  items?: any[];
  loading?: boolean;
  secondActionTitle?: string;
  secondAction?(): void;
  thirdActionTitle?: string;
  thirdAction?(): void;
  style?: CSSProperties;
  hideElement?: boolean;
}

export const EmptySection = memo((props: PropsWithChildren<EmptySectionProps>) => {
  const {
    icon,
    title,
    description,
    card,
    action,
    actionTitle,
    loading = false,
    secondActionTitle,
    secondAction,
    thirdActionTitle,
    thirdAction,
    hideElement = false,
  } = props;

  const iconContent = useMemo(() => {
    if (!icon) return null;
    return <i style={{ fontSize: 70, ...(props.iconStyle || {}) }} className={`text-dark mb-2 mt-2 ${icon}`}></i>;
  }, [icon, props.iconStyle]);

  const titleContent = useMemo(() => {
    if (!title) return null;
    return <h2>{title}</h2>;
  }, [title]);

  const descContent = useMemo(() => {
    if (!description) return null;
    return <h5 className="text-muted">{description}</h5>;
  }, [description]);

  const actionContent = useMemo(() => {
    if (!action || !actionTitle) return null;
    if (!hideElement) {
      return (
        <Button className="mt-3 mb-3" color="primary" onClick={action}>
          {actionTitle}
        </Button>
      );
    }
  }, [action, actionTitle, hideElement]);

  const secondActionContent = useMemo(() => {
    if (!secondActionTitle || !secondAction) return null;
    if (!hideElement) {
      return (
        <Button className="mt-3 mb-3 ml-2" color="primary" onClick={secondAction}>
          {secondActionTitle}
        </Button>
      );
    }
  }, [hideElement, secondAction, secondActionTitle]);

  const thirdActionContent = useMemo(() => {
    if (!thirdActionTitle || !thirdAction) return null;
    if (!hideElement) {
      return (
        <Button className="mt-3 mb-3 ml-2" color="primary" onClick={thirdAction}>
          {thirdActionTitle}
        </Button>
      );
    }
  }, [hideElement, thirdAction, thirdActionTitle]);

  const content = useMemo(
    () => (
      <div className="d-flex flex-column justify-content-center align-items-center">
        {iconContent}
        {titleContent}
        {descContent}
        {actionContent && secondActionContent ? (
          <div className="row">
            {actionContent}
            {secondActionContent}
            {thirdActionContent}
          </div>
        ) : (
          actionContent
        )}
      </div>
    ),
    [actionContent, descContent, iconContent, secondActionContent, thirdActionContent, titleContent],
  );

  if ((props.items && props.items.length > 0) || loading) {
    return <Fragment>{props.children}</Fragment>;
  }

  if (card) {
    return (
      <Card style={props.style}>
        <CardBody>{content}</CardBody>
      </Card>
    );
  }
  return <div style={props.style}>{content}</div>;
});
