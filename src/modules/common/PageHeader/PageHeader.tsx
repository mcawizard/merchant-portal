import { HomeOutlined } from '@ant-design/icons';
import { Button } from '@core/components/Button';
import { FormInput } from '@core/components/form';
import { useHistory } from '@core/router';
import { formControl } from '@core/utils/form';
import { R } from '@core/utils/r';
import { Breadcrumb, ConfigProvider, Space } from 'antd';
import { ButtonColorType, ButtonType, ButtonVariantType } from 'antd/es/button';
import React, { memo, ReactNode, useMemo } from 'react';
import { Link, useLocation, useMatch, useMatches } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { SidebarToggleButton } from '@modules/MainPage/SidebarToggleButton';
import { PageHeaderBackButton } from './PageHeaderBackButton';
export interface BreadcrumbItem {
  title: string | ReactNode;
  to?: string;
  onClick?(): void;
}
export interface HeaderButtons {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
  onClick?(): void;
  loading?: boolean;
  visible?: boolean;
  disabled?: boolean;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
}
export interface PageHeader {
  children: string | ReactNode;
  extraChildren?: ReactNode;
  buttons?: HeaderButtons[];
  withButtonsContent?: ReactNode;
  onSearch?(search: string): void;
  searching?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  noClass?: boolean;
  backButton?: boolean | string;
}

export const PageHeader = memo((props: PageHeader) => {
  const { backButton = false, buttons = [], onSearch, searching = false, breadcrumbs = [] } = props;

  const searchControl = useMemo(() => formControl<string>({ placeholder: 'Search' }), []);
  const buttonsContent = useMemo(() => {
    return buttons
      .filter(b => b.visible !== false)
      .map((btn, index) => {
        if (btn.title) {
          return (
            <Button
              key={index}
              color={btn.color}
              variant={btn.variant}
              icon={btn.icon}
              onClick={btn.onClick}
              loading={btn.loading}
              disabled={btn.disabled}
            >
              {btn.title}
            </Button>
          );
        } else if (btn.icon) {
          return (
            <a key={index} className="ml-3" onClick={btn.onClick}>
              <i className={btn.icon}></i>
            </a>
          );
        } else if (btn.children) {
          return <div key={index}>{btn.children}</div>;
        }
      });
  }, [buttons]);

  const links = useMemo(() => {
    return breadcrumbs.map((item, index) => ({
      title: item.to ? <Link to={item.to}>{item.title}</Link> : item.title,
    }));
  }, [breadcrumbs]);

  return (
    <Card className={props.noClass ? 'w-full' : 'card_page-header'}>
      <CardBody>
        <Helmet>{R.isString(props.children) && <title>Lendwizely - {props.children}</title>}</Helmet>
        <ConfigProvider theme={{ components: { Form: { margin: 0, marginLG: 0, marginMD: 0 } } }}>
          <div className="pb-0 page-title-box d-flex align-items-center justify-content-between flex-wrap">
            <div className="page-title-left d-flex flex-column">
              <div className="flex items-center space-x-4 ">
                {!!backButton && <PageHeaderBackButton backButton={backButton} />}
                <h2 className="text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50 lg:text-2xl truncate">{props.children}</h2>

                {!!breadcrumbs.length && (
                  <>
                    <div className="hidden self-stretch py-1 sm:flex">
                      <div className="h-full w-px bg-gray-300 dark:bg-dark-600"></div>
                    </div>
                    <Breadcrumb
                      items={[
                        {
                          title: (
                            <Link to="/">
                              <HomeOutlined className="text-gradient" />
                            </Link>
                          ),
                        },
                        ...links,
                      ]}
                    />
                  </>
                )}
              </div>
            </div>

            <div className="page-title-right d-flex align-items-center flex-wrap">
              <Space>
                {!!onSearch && (
                  <FormInput
                    debounce
                    loading={searching}
                    noMarginBottom
                    type="search"
                    control={searchControl}
                    onDebounceText={R.debounce(onSearch, 250)}
                  />
                )}
                {buttonsContent}
              </Space>
            </div>
          </div>
          {props.extraChildren}
        </ConfigProvider>
      </CardBody>
    </Card>
  );
});
