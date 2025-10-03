import { PaginateMeta } from '@business/entities/common';
import { Spin } from 'antd';
import React, { memo, useCallback } from 'react';
import { default as RNInfiniteScroll } from 'react-infinite-scroll-component';

export interface InfiniteScrollProps {
  meta: PaginateMeta;
  scrollableTarget?: string;
  count: number;
  onLoadMore: () => void;
}

export const InfiniteScroll = memo((props: React.PropsWithChildren<InfiniteScrollProps>) => {
  const { onLoadMore, children, meta, scrollableTarget, count } = props;

  return (
    <RNInfiniteScroll
      scrollThreshold={0.95}
      style={{ overflow: 'visible' }}
      scrollableTarget={scrollableTarget}
      hasMore={meta.current_page < meta.last_page}
      dataLength={count}
      loader={
        <div className="d-flex justify-content-center mt-2">
          <Spin />
        </div>
      }
      next={onLoadMore}
    >
      {children}
    </RNInfiniteScroll>
  );
});
