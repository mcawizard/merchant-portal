import React, { useMemo, memo } from 'react';
import { R } from '@core/utils/r';
import ReactPaginate from 'react-paginate';

export interface GCPaginateProps {
  page?: number;
  total: number;
  perPage?: number;
  maxPages?: number;
  handlePageClick?(page: number): void;
}

export const GCPaginate = memo((props: GCPaginateProps) => {
  const { total, perPage = 10, handlePageClick } = props;

  const pages = useMemo(() => {
    return R.floor(total / perPage) + (total % perPage > 0 ? 1 : 0);
  }, [perPage, total]);

  return (
    <ReactPaginate
      previousLabel={<i className="mdi mdi-chevron-left"></i>}
      nextLabel={<i className="mdi mdi-chevron-right"></i>}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={data => handlePageClick && handlePageClick(data.selected + 1)}
      containerClassName={'pagination justify-content-center pagination-rounded'}
      activeClassName={'active'}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
    />
  );
});
