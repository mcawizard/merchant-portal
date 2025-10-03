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
          colorPrimary: '#FFF',
        },
        components: {
          Notification: {
            colorBgBase: '#00000025',
            colorBgElevated: '#00000025',
            colorText: '#FFF',
          },
          Button: {
            colorPrimary: 'linear-gradient(135deg, #4285F4, #D641EE)',
            colorPrimaryHover: 'linear-gradient(135deg, rgba(66,133,244,0.8), rgba(214,65,238,0.8))',
            colorPrimaryActive: 'linear-gradient(135deg, rgba(66,133,244,0.6), rgba(214,65,238,0.6))',
            // colorPrimaryBorder: 'green',
            // colorPrimaryBorderHover: 'transparent',
            colorBgContainer: 'transparent',
          },
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
          Card: {
            colorBgContainer: '#FFFFFF05',
            colorBorderSecondary: '#232329',
          },
          Popover: {
            zIndexPopup: 2000,
            colorBgElevated: '#FFFFFF05',
          },
          Input: {
            colorBgContainer: '#FFFFFF05', // Light gray or any custom background
            addonBg: '#FFFFFF05', // Light gray or any custom background
            activeBg: '#FFFFFF15',
            hoverBg: '#FFFFFF10',
            hoverBorderColor: Theme.inputBorderColor,
            activeBorderColor: Theme.inputBorderColor,
            activeShadow: '0 0 0 2px rgba(5, 145, 255, 0.1)',
          },
          Tooltip: {
            colorBgElevated: '#FFFFFF05',
            colorBgSpotlight: '#FFFFFF15',
          },
          Collapse: {
            contentBg: 'FFFFFF05',
            headerBg: '#FFFFFF05',
            borderlessContentBg: '#FFFFFF05',
          },
          Switch: {
            colorPrimary: '#4285F4',
            colorPrimaryHover: '#4285F470',
          },

          Menu: {
            colorBgElevated: '#FFFFFF05', // Light gray or any custom background
            colorBgContainer: '#FFFFFF05', // Light gray or any custom background
            colorItemBg: '#FFFFFF05', // Light gray or any custom background
            colorItemBgActive: '#FFFFFF15', // Light gray or any custom background
            colorItemBgHover: '#FFFFFF10', // Light gray or any custom background
          },
          Select: {
            optionActiveBg: '#FFFFFF15',
            optionSelectedBg: '#FFFFFF30',
            colorBgBase: 'orange',
            colorBgElevated: '#00000025',
            colorBgContainer: '#FFFFFF05', // Light gray or any custom background
            colorPrimaryHover: Theme.inputBorderColor,
            colorPrimaryActive: Theme.inputBorderColor,
            colorPrimaryBorderHover: Theme.inputBorderColor,
            colorPrimaryBorder: Theme.inputBorderColor,
            colorPrimary: Theme.inputBorderColor,
          },
          DatePicker: {
            hoverBorderColor: Theme.inputBorderColor,
            activeBorderColor: Theme.inputBorderColor,
            activeShadow: '0 0 0 2px rgba(5, 145, 255, 0.1)',
            zIndexPopup: 2000,
            activeBg: '#FFFFFF15',
            colorBgContainer: '#FFFFFF05', // Light gray or any custom background
            colorBgElevated: '#FFFFFF05', // Light gray or any custom background
          },
          Pagination: {
            itemBg: '#FFFFFF10',
            itemActiveBg: '#FFFFFF20',
          },
          Breadcrumb: {
            // separatorColor: Theme.inputBorderColor,
            fontSize: 14,
            // colorText: 'var(--color-dark-200)',
            linkColor: '#FFFF',
            lastItemColor: 'var(--color-dark-200)',
          },
          Image: {
            zIndexPopupBase: 2000,
            zIndexPopup: 2001,
          },
          Dropdown: {
            colorBgElevated: '#FFFFFF15', // Light gray or any custom background
          },
          Splitter: {
            controlItemBgHover: 'transparent',
            controlItemBgActive: '#2E2F32',
            controlItemBgActiveHover: '#2E2F32',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
