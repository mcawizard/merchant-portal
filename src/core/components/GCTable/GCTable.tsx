import React, { memo, useMemo, useState, useEffect, useCallback, ReactNode, Fragment } from 'react';
import { default as DataTableWithFooter, IDataTableColumn, IDataTableProps as IDataTablePropsWithFooter } from 'react-data-table-component-footer';
import DataTable, { IDataTableProps, TableColumn } from 'react-data-table-component';
import { Input } from 'reactstrap';
import { R } from '@core/utils/r';
import { PaginatedController } from '@core/utils/paginated';
import { useObservable } from '@core/utils/hooks/rxjs';
import { PageQuery } from '@business/entities/common';
import { LoadingIndicator } from '../LoadingIndicator';
import { useLoadingBar } from '../LoadingBar';
import { useLazyEffect } from '@core/utils/react';

interface GCFilterButtonProps {
  setSearch(text: string): void;
  search: string;
}

const GCFilterButton = memo((props: GCFilterButtonProps) => {
  const { setSearch, search } = props;

  return (
    <Input
      className="form-control"
      id="table-search-field"
      placeholder="Search"
      bsSize="sm"
      style={{ width: 200 }}
      value={search}
      onChange={event => setSearch(event.target.value)}
    />
  );
});

export type GCColumn<T = any> = TableColumn<T>;

export interface GCTableProps<Q extends PageQuery, T = any> extends Omit<IDataTableProps<T>, 'columns'> {
  columns: GCColumn<T>[];
  searchFields?: (keyof T | string)[];
  paginated?: PaginatedController<T, any, Q, any>;
  noSearch?: boolean;
  children?: ReactNode;
  noQueryOnSearch?: boolean;
  bordered?: boolean;
  defaultSortField?: string;
  footer?: any;
  onSearch?(search: string): void;
  initialSearchString?: string;
  classNameExtra?: string;
}

export function GCTable<Q extends PageQuery, T = any>(props: GCTableProps<Q, T>) {
  const {
    searchFields = [],
    paginated,
    noSearch = false,
    noQueryOnSearch = false,
    bordered = true,
    onSearch: propsOnSearch,
    classNameExtra = '',
  } = props;
  const defaultSortFieldId = useMemo(() => {
    const index = R.findIndex(props.columns, c => c.sortField === props.defaultSortField);
    if (index >= 0) return index;
    return undefined;
  }, [props.columns, props.defaultSortField]);

  const [filteredData, setFilteredData] = useState<T[]>([]);
  const pageMeta = useObservable(paginated?.pageMeta$);
  const loading = useObservable(paginated?.loading.state$);
  const loadingBar = useLoadingBar();
  const [search, setSearch] = useState(props.initialSearchString || '');

  useEffect(() => {
    setFilteredData(props.data);
  }, [props.data]);

  const onSearch = useCallback(
    (search: string) => {
      if (paginated && !noQueryOnSearch) {
        paginated.patchQuery({ search, page: 1 } as Partial<any>).subscribe();
        return;
      }

      propsOnSearch && propsOnSearch(search);
      //   if (R.isEmpty(search)) return setFilteredData(props.data);

      //   const newFilteredData = props.data.filter(item => {
      //     let isMatch = false;
      //     searchFields.forEach(f => {
      //       const val = R.get(item, f);
      //       if (val && val.toString().toLowerCase().includes(search.toLowerCase())) {
      //         isMatch = true;
      //       }
      //     });
      //     return isMatch;
      //   });
      //   setFilteredData(newFilteredData);
    },
    [noQueryOnSearch, paginated, propsOnSearch],
  );

  useLazyEffect(() => onSearch(search), [search, onSearch], 300);

  const paginatedProps: Partial<IDataTableProps<T>> = useMemo(() => {
    if (!paginated || !pageMeta) return {};

    return {
      pagination: true,
      paginationServer: true,
      paginationTotalRows: pageMeta.total,
      onChangePage: page => paginated.patchQuery({ page } as Partial<Q>).subscribe(),
      onChangeRowsPerPage: (perPage, page) => paginated.patchQuery({ page, perPage } as Partial<Q>).subscribe(),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginated, pageMeta]);

  const subHeaderComponent = useMemo(() => {
    if (props.noHeader) return null;
    return (
      <Fragment>
        <div style={{ alignItems: 'center', display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          {props.children}
          {!noSearch && <GCFilterButton search={search} setSearch={setSearch} />}
        </div>
      </Fragment>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children, search]);

  useEffect(() => {
    if (loading && loading.loading) {
      loadingBar.show();
    } else {
      loadingBar.hide();
    }
  }, [loading, loadingBar]);

  const oldColumns: IDataTableColumn<T>[] = useMemo(() => {
    return props.columns.map(c => ({ ...(c as any), selector: c.sortField }));
  }, [props.columns]);

  if (props.footer) {
    return (
      <DataTableWithFooter
        className={`rdt-custom ${bordered ? 'bordered' : ''} ${classNameExtra}`}
        striped
        persistTableHead
        noHeader
        subHeaderComponent={subHeaderComponent}
        subHeader={!props.noHeader}
        pagination
        paginationPerPage={25}
        progressPending={loading?.loading}
        progressComponent={
          <div className="my-4">
            <LoadingIndicator />
          </div>
        }
        {...(paginatedProps as any)}
        columns={oldColumns}
        defaultSortField={props.defaultSortField}
        paginationComponentOptions={{
          rowsPerPageText: 'Show entries',
        }}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        sortIcon={<i className="ml-1 bx bx-sort-up"></i>}
        footer={props.footer}
        footerBold={false}
        {...R.omit(props, 'columns')}
        data={filteredData}
      />
    );
  }
  return (
    <DataTable
      className={`rdt-custom ${bordered ? 'bordered' : ''} ${classNameExtra}`}
      striped
      persistTableHead
      noHeader
      subHeaderComponent={subHeaderComponent}
      subHeader={!props.noHeader}
      pagination
      paginationPerPage={25}
      progressPending={loading?.loading}
      progressComponent={
        <div className="my-4">
          <LoadingIndicator />
        </div>
      }
      {...paginatedProps}
      paginationServer={!!props.paginated}
      paginationServerOptions={{
        persistSelectedOnPageChange: true,
        persistSelectedOnSort: true,
      }}
      defaultSortFieldId={defaultSortFieldId}
      paginationComponentOptions={{
        rowsPerPageText: 'Show entries',
      }}
      paginationRowsPerPageOptions={[10, 25, 50, 100]}
      sortIcon={<i className="ml-1 bx bx-sort-up"></i>}
      {...props}
      data={filteredData}
    />
  );
}
