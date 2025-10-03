import React, { Fragment, useMemo, useCallback, memo, useState, useEffect } from 'react';
import { R } from '@core/utils/r';
import { Observable, isObservable } from 'rxjs';

export interface GCPaginationProps {
  page?: number;
  total: number;
  perPage?: number;
  maxPages?: number;
  onPage?(page: number): void | Observable<any>;
}

export const GCPagination = memo((props: GCPaginationProps) => {
  const { page = 1, total, perPage = 25, maxPages = 5, onPage } = props;

  const [currentPage, setCurrentPage] = useState(page);

  const pages = useMemo(() => {
    return R.floor(total / perPage) + (total % perPage > 0 ? 1 : 0);
  }, [perPage, total]);

  const pageItems = useMemo(() => {
    const totalPages = R.range(1, pages + 1);
    if (pages > maxPages) {
      let initialItems = R.take(totalPages, maxPages - 1);
      if (currentPage > maxPages - 1) {
        initialItems = R.take(R.drop(totalPages, currentPage - maxPages + 1), maxPages - 1);
      }
      return [...initialItems, null, R.last(totalPages)];
    }
    return totalPages;
  }, [currentPage, maxPages, pages]);

  const isFirst = useMemo(() => currentPage === 1, [currentPage]);
  const isLast = useMemo(() => currentPage === pages, [currentPage, pages]);

  const activeClass = useCallback((input: boolean) => (input ? 'page-item active' : 'page-item'), []);
  const disabledClass = useCallback((input: boolean) => (input ? 'page-item disabled' : 'page-item'), []);

  const updatePage = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= pages) {
        setCurrentPage(newPage);
      }
    },
    [pages],
  );

  useEffect(() => {
    if (onPage) {
      const result = onPage(currentPage);
      if (isObservable(result)) {
        result.subscribe();
      }
    }
  }, [currentPage, onPage]);

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);

  return (
    <Fragment>
      <div className="text-center">
        <ul className="pagination justify-content-center pagination-rounded">
          {/* <li className={activePage > 1 ? 'page-item' : 'page-item disabled'}> */}
          <li className={disabledClass(isFirst)}>
            <a className="page-link" onClick={() => updatePage(currentPage - 1)}>
              <i className="mdi mdi-chevron-left"></i>
            </a>
          </li>
          {pageItems.map(pageNumber => {
            if (!R.isNumber(pageNumber)) {
              return (
                <li className="page-item">
                  <a className="page-link">...</a>
                </li>
              );
            }
            return (
              <li key={pageNumber} className={activeClass(pageNumber === currentPage)}>
                <a className="page-link" onClick={() => updatePage(pageNumber)}>
                  {pageNumber}
                </a>
              </li>
            );
          })}

          <li className={disabledClass(isLast)}>
            <a className="page-link" onClick={() => updatePage(currentPage + 1)}>
              <i className="mdi mdi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
});
