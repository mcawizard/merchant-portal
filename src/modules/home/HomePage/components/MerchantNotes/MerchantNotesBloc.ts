import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { PageQuery } from '@business/entities/common';
import { CreateMerchantNoteRequest, MerchantNoteResponse } from '@business/entities/merchant-notes';
import { tap } from 'rxjs';

export class MerchantNotesBloc extends BaseBloc {
  private readonly merchantNoteBloc = resolve(Blocs.merchantNote);

  constructor(private readonly merchantId: string) {
    super();
  }

  fetchFn = (query: PageQuery) => {
    return this.merchantNoteBloc.browse({ ...query, merchantId: this.merchantId });
  };

  readonly paginated = new PaginatedController<MerchantNoteResponse, PageQuery>(this.fetchFn, {
    initalQuery: {
      page: 1,
      sortBy: 'created_at',
      sortDirection: 'desc', // Newest first from API
      merchantId: this.merchantId,
    },
    hasFilters: false,
    preserveRecords: false, // Don't preserve records to prevent multiple calls
  });

  // Custom method to load older messages (append to bottom)
  loadMoreOlder = () => {
    const currentMeta = this.paginated.pageMeta$.value;
    if (currentMeta.current_page >= currentMeta.last_page) {
      return; // No more pages to load
    }

    const nextPage = currentMeta.current_page + 1;
    const currentQuery = this.paginated.pageQuery$.value;

    return this.fetchFn({ ...currentQuery, page: nextPage }).pipe(
      tap(result => {
        if (result && result.data) {
          // Append older messages to the bottom of the list
          const currentItems = this.paginated.items$.value;
          this.paginated.items$.next([...currentItems, ...result.data]);
          this.paginated.pageMeta$.next(result.meta);
        }
      }),
    );
  };

  create = (data: CreateMerchantNoteRequest) => {
    return this.merchantNoteBloc.create(data).pipe(
      tap(newNote => {
        debugger;
        // Add new note to the top of the list (newest at top)
        const currentItems = this.paginated.items$.value;
        this.paginated.items$.next([...[newNote], ...currentItems]);
      }),
    );
  };
}
