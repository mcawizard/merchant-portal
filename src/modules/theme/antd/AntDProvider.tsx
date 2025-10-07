import { ConfigProvider, theme } from 'antd';
import React, { memo } from 'react';
import { Theme } from '@core/utils/css';

export const AntDProvider = ({ children }) => {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          colorPrimary: '#556ee6',
        },
        components: {
          Form: {
            margin: 12,
            marginLG: 12,
            verticalLabelPadding: '0 0 0',
          },
          Segmented: {
            colorBgBase: 'red',
            colorBgElevated: '#FFFFFF20',
            colorBgLayout: '#FFFFFF10',
          },
          Table: {
            // headerBg: '#FFFFFF',
            // headerSplitColor: '#FFF',
            colorBgContainer: 'transparent',
            headerBg: 'transparent',
            headerSortActiveBg: '#FFFFFF20',
            // headerColor: '#FFF',
            headerFilterHoverBg: '#FFFFFF10',
            headerSortHoverBg: '#FFFFFF10',
            rowHoverBg: '#FFFFFF15',
            bodySortBg: 'transparent',
          },
          Popover: {
            zIndexPopup: 2000,
          },
          Input: {
            // hoverBorderColor: Theme.inputBorderColor,
            activeBorderColor: Theme.inputBorderColor,
            activeShadow: '0 0 0 2px rgba(5, 145, 255, 0.1)',
          },
          Select: {
            // colorPrimaryHover: Theme.inputBorderColor,
            colorPrimaryActive: Theme.inputBorderColor,
            colorPrimaryBorderHover: Theme.inputBorderColor,
            colorPrimaryBorder: Theme.inputBorderColor,
            colorPrimaryBg: Theme.inputBorderColor,
            colorPrimary: Theme.inputBorderColor,
          },
          DatePicker: {
            hoverBorderColor: Theme.inputBorderColor,
            activeBorderColor: Theme.inputBorderColor,
            activeShadow: '0 0 0 2px rgba(5, 145, 255, 0.1)',
          },
          Image: {
            zIndexPopupBase: 2000,
            zIndexPopup: 2001,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
