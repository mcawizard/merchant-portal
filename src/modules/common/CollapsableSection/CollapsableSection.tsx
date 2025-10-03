import React, { memo, useState, useCallback } from 'react';
import { Collapse, CollapseProps } from 'antd';
import { Card, CardProps } from 'antd';
import './index.scss';

export interface AccordionSection {
  key: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  button?: { label: string; onClick?: () => void };
}

export interface EntityAccordionProps extends Omit<CollapseProps, 'children'> {
  sections: AccordionSection[];
  useCard?: boolean;
  cardProps?: CardProps;
  defaultOpenKey?: string;
  showArrow?: boolean;
}

export const CollapsableSection = memo(
  ({ sections, useCard = false, cardProps, defaultOpenKey, showArrow = false, ...collapseProps }: EntityAccordionProps) => {
    const [activeKey, setActiveKey] = useState<string>(defaultOpenKey || '');

    const handleChange = useCallback((key: string | string[]) => {
      setActiveKey(Array.isArray(key) ? key[0] : key);
    }, []);

    const content = (
      <Collapse accordion className="custom-collapse" activeKey={activeKey} onChange={handleChange} ghost {...collapseProps}>
        {sections.map(({ key: sectionKey, title, description, content, button }) => (
          <Collapse.Panel
            key={sectionKey}
            showArrow={showArrow}
            extra={button ? <button onClick={button.onClick}>{button.label}</button> : undefined}
            header={
              <div style={{ paddingLeft: 8 }}>
                <div>{title}</div>
                {description && <small style={{ display: 'block', color: '#aaa', marginTop: 2 }}>{description}</small>}
              </div>
            }
            style={{
              border: '1px solid #444',
              borderRadius: 6,
              marginBottom: 8,
            }}
          >
            {activeKey === sectionKey && content}
          </Collapse.Panel>
        ))}
      </Collapse>
    );

    return useCard ? (
      <Card style={{ padding: 0 }} bodyStyle={{ padding: 0 }} {...cardProps}>
        {content}
      </Card>
    ) : (
      content
    );
  },
);
