import { useEffect, useRef } from 'react';
import { MainPageBloc } from './MainPageBloc';

export interface MainPageInterface {
  bloc: MainPageBloc;
  sidebar: boolean;
  menu: boolean;
  header: boolean;
  setConfig?: React.Dispatch<React.SetStateAction<{ menu: boolean; sidebar: boolean; header: boolean }>>;
}
export const MainPageContext = React.createContext<MainPageInterface>({
  bloc: null as any,
  sidebar: true,
  header: true,
  menu: true,
});

export function useMainPageContext() {
  return React.useContext(MainPageContext);
}

export function useMainPageConfig(fn: () => Partial<Omit<MainPageInterface, 'bloc' | 'setConfig'>>) {
  const oldConfig = useMainPageContext();
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    if (fnRef.current) {
      const config = fnRef.current();
      oldConfig.setConfig && oldConfig.setConfig({ ...oldConfig, ...config });

      return () => oldConfig.setConfig && oldConfig.setConfig({ ...oldConfig, menu: true, sidebar: true, header: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
