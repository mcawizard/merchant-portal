import { QuestionCircleOutlined } from '@ant-design/icons';
import { FormCheckbox, FormSwitch } from '@core/components/form';
import { FormControl } from '@core/utils/form';
import { R } from '@core/utils/r';
import { Popover } from 'antd';
import React, { memo } from 'react';

export interface SettingItemProps {
  control: FormControl<boolean>;
  info?: string | React.ReactNode | { title: string; content: string | React.ReactNode };
}

export const SettingItem = memo((props: SettingItemProps) => {
  const { control, info } = props;
  return (
    <div>
      <FormSwitch control={control}>
        {!!info && (
          <Popover title={R.get(info, 'title') || control.config.label} content={<SettingItemInfo info={info} />} trigger="hover" placement={'right'}>
            <span className="text-muted ml-2 hover-pointer">
              <QuestionCircleOutlined />
            </span>
          </Popover>
        )}
      </FormSwitch>
    </div>
  );
});

export interface SettingItemInfoProps {
  info: string | React.ReactNode | { title: string; content: string | React.ReactNode };
}
export const SettingItemInfo = memo((props: SettingItemInfoProps) => {
  const { info } = props;
  const hasContent = R.has(info, 'content');
  return <div style={{ maxWidth: 500 }}>{hasContent ? (R.get(info, 'content') as any) : (info as string)}</div>;
});
