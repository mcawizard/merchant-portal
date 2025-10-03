import { Button } from '@core/components/Button';
import { classnames } from '@core/utils/css';
import { R } from '@core/utils/r';
import React, { Component, ExoticComponent, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Card, CardBody, Col, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface WizardMapping {
  title: string;
  component: Component<any> | ExoticComponent<any>;
  props?: any;
  onNext?(): boolean | Observable<boolean>;
  canView?: boolean;
  visible?: boolean;
  isValid?: boolean;
  stepId?: string;
}

export interface WizardProps {
  vertical?: boolean;
  steps: WizardMapping[];
  initialIndex?: number;
  onSubmit?(): void;
  submitting?: boolean;
  onTabChange?(index: number, stepId?: string): void;
  noPadding?: boolean;
  baseClass?: string;
  card?: boolean;
  hideButton?: boolean;
  currentIndex?: number;
  saveButton?: React.ReactNode;
  doneButtonTitle?: string;
}

export const Wizard = memo((props: WizardProps) => {
  const {
    initialIndex = 0,
    vertical = false,
    onSubmit,
    onTabChange,
    noPadding = false,
    baseClass = 'twitter-bs-wizard',
    card = false,
    hideButton = false,
    currentIndex,
    doneButtonTitle = 'Save',
  } = props;

  const steps = useMemo(() => props.steps.filter(b => b.visible !== false), [props.steps]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(initialIndex);

  useEffect(() => {
    if (!R.isUndefined(currentIndex)) {
      setActiveTabIndex(currentIndex);
    }
  }, [currentIndex]);

  const navBar = useMemo(() => {
    return (
      <div id="basic-pills-wizard" className={`${baseClass}`}>
        <ul className={`${baseClass}-nav nav nav-pills nav-justified`}>
          {steps.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <NavLink
                style={{ cursor: 'pointer' }}
                className={classnames({ active: activeTabIndex === index, disabled: tab.canView === false, navLinkCenter: true })}
                onClick={() => {
                  if (tab.canView !== false) {
                    setActiveTabIndex(index);
                  }
                }}
              >
                <span className="step-number mr-2">{index + 1}</span>
                {tab.title}
              </NavLink>
            </NavItem>
          ))}
        </ul>
      </div>
    );
  }, [baseClass, steps, activeTabIndex]);

  const panes = useMemo(
    () => (
      <TabContent activeTab={activeTabIndex} className={`${baseClass}-tab-content`}>
        {steps.map((tab, index) => {
          const TabComponent = tab.component as any;
          return (
            <TabPane tabId={index} className={noPadding ? '' : 'p-3'} key={`pane-${index}`}>
              <TabComponent key={index} {...tab.props} />
            </TabPane>
          );
        })}
      </TabContent>
    ),
    [activeTabIndex, baseClass, steps, noPadding],
  );

  const onNext = useCallback(() => {
    const tab = R.get(steps, activeTabIndex);
    if (!R.isUndefined(currentIndex)) {
      if (tab.isValid) {
        setActiveTabIndex(activeTabIndex + 1);
      }
      return;
    }
    if (tab && tab.onNext) {
      const result = tab.onNext();
      if (!R.isBoolean(result)) {
        result.pipe(tap(res => res && setActiveTabIndex(activeTabIndex + 1))).subscribe();
      } else if (result) {
        setActiveTabIndex(activeTabIndex - 1);
      }
    } else {
      setActiveTabIndex(activeTabIndex + 1);
    }
  }, [steps, activeTabIndex, currentIndex]);

  const stepIdsString = useMemo(() => steps.map(b => b.stepId || '').join('|'), [steps]);

  useEffect(
    () => onTabChange && onTabChange(activeTabIndex, R.get(stepIdsString.split('|'), activeTabIndex)),
    [onTabChange, activeTabIndex, stepIdsString],
  );

  const onPrevious = useCallback(() => {
    if (!R.isUndefined(currentIndex)) {
      setActiveTabIndex(activeTabIndex - 1);
      return;
    }
    setActiveTabIndex(activeTabIndex - 1);
  }, [activeTabIndex, currentIndex]);

  const footer = useMemo(() => {
    return (
      <div className={`pager wizard ${baseClass}-pager-link d-flex ml-3 mr-3 mb-3`}>
        <div style={{ flex: 1 }} className="d-flex">
          {activeTabIndex !== 0 && <Button onClick={() => onPrevious()}>Previous</Button>}
        </div>
        {activeTabIndex !== steps.length - 1 && <Button onClick={onNext}>Next</Button>}
        {activeTabIndex === steps.length - 1 && !props.saveButton && !!onSubmit && (
          <Button loading={props.submitting} onClick={onSubmit}>
            {doneButtonTitle}
          </Button>
        )}
        {activeTabIndex === steps.length - 1 && props.saveButton && !!onSubmit && <>{props.saveButton}</>}
      </div>
    );
  }, [baseClass, activeTabIndex, steps.length, onNext, props.saveButton, props.submitting, onSubmit, doneButtonTitle, onPrevious]);

  if (vertical) {
    return (
      <Row>
        <Col lg={2}>{navBar}</Col>
        <Col lg={10}>
          {panes}
          {!hideButton && footer}
        </Col>
      </Row>
    );
  } else {
    return (
      <React.Fragment>
        {card ? (
          <Card>
            <CardBody style={{ padding: '0.5rem' }}>{navBar}</CardBody>
          </Card>
        ) : (
          navBar
        )}

        {panes}
        {!hideButton && footer}
      </React.Fragment>
    );
  }
});
