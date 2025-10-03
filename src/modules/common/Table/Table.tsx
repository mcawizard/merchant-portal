import React, { memo, useCallback, useMemo } from 'react';
import { Table as AntTable } from 'antd';
import type { ColumnsType, TableProps as AntTableProps, TablePaginationConfig } from 'antd/es/table';
import { AnyObject } from 'antd/es/_util/type';
import { PaginatedController } from '@core/utils/paginated';
import { PageQuery } from '@business/entities/common';
import { useObservable } from '@core/utils/hooks/rxjs';
import { useDidMount } from '@core/utils/hooks/react';
import { LoadingState, useLoadingState } from '@core/utils/repository/loading_state';
import { FilterValue, SorterResult } from 'antd/es/table/interface';

export type TableColumn<T> = ColumnsType<T>;
export interface TableProps<T, Q extends PageQuery> extends AntTableProps<T> {
  paginated?: PaginatedController<T, Q>;
  noInitialFetch?: boolean;
}

export function Table<T extends AnyObject, Q extends PageQuery>(props: TableProps<T, Q>) {
  const { dataSource, columns, paginated, noInitialFetch = false, ...rest } = props;
  const pageMeta = useObservable(paginated?.pageMeta$);
  const loadingState = useMemo(() => new LoadingState(), []);
  const loading = useLoadingState(paginated ? paginated.loading : loadingState);
  const items = useObservable(paginated?.items$);

  useDidMount(() => {
    if (paginated && !noInitialFetch) {
      paginated.fetch().subscribe();
    }
  });

  const onChange = useCallback(
    (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<T> | SorterResult<T>[], extra: any) => {
      if (paginated) {
        paginated
          .patchQuery({
            filters,
            page: pagination.current,
            perPage: pagination.pageSize,
            sortBy: (sorter as SorterResult<T>).field,
            sortDirection: (sorter as SorterResult<T>).order ? ((sorter as SorterResult<T>).order == 'ascend' ? 'asc' : 'desc') : undefined,
          } as Partial<Q>)
          .subscribe();
      }
    },
    [paginated],
  );

  const paginationProps: Partial<TablePaginationConfig> = useMemo(() => {
    if (!paginated || !pageMeta) return {};
    return {
      total: pageMeta.total,
      pageSize: pageMeta.per_page,
      current: pageMeta.current_page,
    };
  }, [paginated, pageMeta]);

  return (
    <AntTable<T>
      dataSource={items || dataSource}
      columns={columns}
      pagination={{
        hideOnSinglePage: true,
        responsive: true,
        pageSizeOptions: [25, 50, 100],
        showSizeChanger: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        ...paginationProps,
      }}
      scroll={{ scrollToFirstRowOnChange: true }}
      loading={loading.loadingOrRefreshing}
      onChange={onChange}
      {...rest}
    />
  );
}
