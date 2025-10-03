import React, { memo, useState } from 'react';
import { MainHeader } from './MainHeader';
import { MainSidebar } from './MainSidebar';
import { MainRouter } from './MainRouter';
import { useBloc } from '@core/utils/bloc';
import { MainPageBloc } from './MainPageBloc';
import { MainPageContext, MainPageInterface } from './context';

export const MainPage = memo(() => {
  const bloc = useBloc(MainPageBloc);
  const [config, setConfig] = useState<Omit<MainPageInterface, 'setConfig' | 'bloc'>>({ sidebar: true, header: true, menu: true });

  return (
    <MainPageContext.Provider value={{ bloc, ...config, setConfig }}>
      <MainHeader header={config.header} />
      <MainRouter />
      <MainSidebar sidebar={config.sidebar} />
    </MainPageContext.Provider>
  );
});
