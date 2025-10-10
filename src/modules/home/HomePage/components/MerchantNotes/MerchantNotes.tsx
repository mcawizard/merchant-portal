import React, { memo, useCallback, useState, useRef, useMemo, Fragment } from 'react';
import { MerchantNotesBloc } from './MerchantNotesBloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { useBloc } from '@core/utils/bloc';
import { Card, Divider, Empty, Spin } from 'antd';
import './MerchantNotes.scss';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { useDidMount } from '@core/utils/hooks/react';
import { CreateNoteBox } from './CreateNoteBox';
import { NoteItem } from './NoteItem';
import { formControl, FormDataType, formGroup } from '@core/utils/form';

function defineNoteForm(merchant_id: string) {
  return formGroup({
    merchant_id: formControl<string>({
      label: 'Merchant ID',
      initialValue: merchant_id,
    }),
    merchant_user_note: formControl<string>({
      label: 'Note',
      required: true,
    }),
    pinned: formControl<boolean>({
      label: 'Pinned',
      initialValue: false,
    }),
  });
}

export type NoteFormData = FormDataType<typeof defineNoteForm>;
export type NoteFormType = ReturnType<typeof defineNoteForm>;

export const MerchantNotes = memo(() => {
  const user = useObservable(Session.user$);
  const merchantId = user?.merchant?.id ?? '0';
  const bloc = useBloc(MerchantNotesBloc, merchantId);
  const form = useMemo(() => defineNoteForm(merchantId), [merchantId]);

  const notes = useObservable(bloc.paginated.items$, []);
  const pageMeta = useObservable(bloc.paginated.pageMeta$);
  const loading = useLoadingState(bloc.paginated.loading);

  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useDidMount(() => {
    bloc.paginated.reload().subscribe();
  });

  // Handle scroll events for loading older messages when scrolling to bottom
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isLoadingMore) return;

    // Check if scrolled to bottom (within 50px) - load older messages
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 50;
    if (isAtBottom) {
      // Check if there are more pages to load
      if (pageMeta && pageMeta.current_page < pageMeta.last_page) {
        setIsLoadingMore(true);

        const subscription = bloc.loadMoreOlder();
        if (subscription) {
          subscription.subscribe({
            next: () => {
              setIsLoadingMore(false);
            },
            error: err => {
              console.error('Error loading more notes:', err);
              setIsLoadingMore(false);
            },
          });
        } else {
          setIsLoadingMore(false);
        }
      }
    }
  }, [bloc, pageMeta, isLoadingMore]);

  const onSubmit = useCallback(
    data => {
      return bloc.create(data);
    },
    [bloc],
  );

  const scrollableTargetId = 'merchant-notes-scroll';

  return (
    <Card className="merchant-notes-card">
      <div className="merchant-notes-header">
        <div className="header-title">
          <i className="fa-duotone fa-solid fa-note-sticky" />
          <span>Merchant Notes</span>
        </div>
      </div>

      <div className="merchant-notes-header-actions">
        <CreateNoteBox form={form} onSubmit={onSubmit} />
      </div>

      <Divider className="create-note-divider" />

      <div className="merchant-notes-content" id={scrollableTargetId} ref={scrollContainerRef} onScroll={handleScroll}>
        {loading && notes.length === 0 ? (
          <div className="notes-loading">
            <Spin size="large" />
            <div>Loading notes...</div>
          </div>
        ) : notes.length === 0 ? (
          <div className="notes-empty">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No notes yet">
              <p className="text-muted">Be the first to add a note about this merchant.</p>
            </Empty>
          </div>
        ) : (
          <Fragment>
            <div className="notes-list">
              {notes.map((note, index) => (
                <Fragment key={note.id}>
                  <NoteItem note={note} />
                  {index < notes.length - 1 && <Divider className="note-divider" />}
                </Fragment>
              ))}
            </div>

            {/* Loading indicator for older messages at the bottom */}
            {isLoadingMore && (
              <div className="notes-loading-more">
                <Spin size="small" />
                <span>Loading older notes...</span>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Card>
  );
});
