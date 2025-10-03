import { HomeStatResponse } from '@business/entities/home';
import { Card, ConfigProvider, Tooltip } from 'antd';
import React, { memo } from 'react';
import CountUp from 'react-countup';
import { ComingSoon } from './ComingSoon';
export interface HomePageStatProps {
  stat: HomeStatResponse;
}

export const HomePageStat = memo((props: HomePageStatProps) => {
  const { stat } = props;
  return (
    <ConfigProvider theme={{ components: { Card: { padding: 12, paddingLG: 12 } } }}>
      <div className="mt-4 flex-fill ">
        <Card style={{ minWidth: 150, position: 'relative' }} className="bg-home-gradient-border bg-home-card-dim">
          <div className="flex items-center">
            <div className="flex-fill">
              {stat.isComing && <ComingSoon />}
              <div className="flex items-center justify-between w-full mb-2">
                <div className="text-[12px] text-muted">
                  {stat.title}{' '}
                  <Tooltip title={stat.description} placement="top">
                    <i className="fa-duotone fa-solid fa-circle-question"></i>
                  </Tooltip>
                </div>
              </div>
              <div className="text-xl font-bold mb-2">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={1}
                  decimals={stat.prefix == '$' ? 2 : 0}
                  prefix={stat.prefix}
                  separator=","
                  style={{ fontWeight: 500 }}
                />
              </div>
            </div>
            <div
              className="rounded-full aspect-square flex items-center justify-center w-[25px] h-[25px]"
              style={{ color: 'white', backgroundColor: '#0075FF' }}
            >
              <i className={stat.icon}></i>
            </div>
          </div>
        </Card>
      </div>
    </ConfigProvider>
  );
});
