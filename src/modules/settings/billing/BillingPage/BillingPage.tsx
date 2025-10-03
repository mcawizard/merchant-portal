import { CollapsableSection, Table } from '@modules/common';
import React, { memo, useCallback, useMemo } from 'react';
import { BillingPaymentMethods } from './Components/PaymentMethods';
import { BillingSubscriptions } from './Components/Subscriptions';
import { BillingTransactions } from './Components/Transactions';
import { HasPermissions } from '@modules/common/HasPermissions';
import { AppModule } from '@business/entities/permission';
import { Page } from '@modules/common/Page';
import { PageHeader } from '@modules/common/PageHeader';
import { BillingAddress } from './Components/Address';
import { openAddEditAddress } from './AddEditAddressModal';
import { BillingPageContext } from './BillingPageContext';
import { useBloc } from '@core/utils/bloc';
import { BillingPageBloc } from './BillingPageBloc';
import { openAddEditPaymentMethod } from './AddEditPaymentModal';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { BillingLinks } from './Components/BillingLinks';

export const BillingPage = memo(() => {
  const bloc = useBloc(BillingPageBloc);
  const loading = useLoadingState(bloc.loading);

  const accordionSections = [
    {
      key: 'address',
      title: 'Address',
      description: 'Manage your Address',
      content: <BillingAddress />,
      button: { label: 'Add +', onClick: () => openAddEditAddress({}) },
    },
    {
      key: 'paymentMethods',
      title: 'Payment Methods',
      description: 'Manage your payment methods',
      content: <BillingPaymentMethods />,
      button: { label: 'Add +', onClick: () => openAddEditPaymentMethod({}) },
    },
    {
      key: 'subscriptions',
      title: 'Subscriptions',
      description: 'Manage your billing subscriptions and plans.',
      content: <BillingSubscriptions />,
    },
    {
      key: 'transactions',
      title: 'Transactions',
      description: 'Manage your billing transactions and history.',
      content: <BillingTransactions />,
    },
    {
      key: 'links',
      title: 'Links',
      description: 'Policies',
      content: <BillingLinks />,
    },
  ];

  if (loading.loading)
    return (
      <HasPermissions module={AppModule.billing}>
        <Page>
          <PageHeader>Billing</PageHeader>
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <i className="fa-duotone fa-solid fa-spinner fa-spin text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-500">Fetching Billing Details...</p>
            </div>
          </div>
        </Page>
      </HasPermissions>
    );

  return (
    <HasPermissions module={AppModule.billing}>
      <Page>
        <PageHeader>Billing</PageHeader>
        <BillingPageContext.Provider
          value={{
            bloc,
          }}
        >
          <CollapsableSection sections={accordionSections} defaultOpenKey="paymentMethods" />
        </BillingPageContext.Provider>
      </Page>
    </HasPermissions>
  );
});
