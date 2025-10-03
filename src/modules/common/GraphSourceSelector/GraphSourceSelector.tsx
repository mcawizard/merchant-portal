import React, { memo, useCallback, useMemo, useEffect, useState } from 'react';
import { t } from 'ttag';
import { css } from '@emotion/react';
import { useBloc } from '@core/utils/bloc';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { FormSelect, FormInput, FormDateInput } from '@core/components/form';
import { useFormConfig, useFormState, formGroup, formControl, FormDataType, Validators } from '@core/utils/form';
import { CommonService } from '@business/services';
import { useObservable } from '@core/utils/hooks/rxjs';
import { GraphSourceSelectorBloc } from './GraphSourceSelectorBloc';
import { tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GraphValueResponse } from '@business/entities/graph';
import { ReportDataSource } from '@business/entities/dynamicReprots';
import { TableAction, TableActions } from '../TableActions';
import { openGraphModal } from '../AddEditGraphModal';
import { R } from '@core/utils/r';
import { Button } from '@core/components/Button';
import { ColumnType } from 'antd/es/list';
import { Table } from '../Table';

const styles = {
  content: css`
    padding: 25px !important;
  `,
};

export interface GraphSourceSelectorProps {
  onSelect: (source: ReportDataSource) => void;
}

export const GraphSourceSelector = memo((props: GraphSourceSelectorProps) => {
  const modal = useModalInstance();
  const bloc = useBloc(GraphSourceSelectorBloc);
  const sources = useObservable(bloc.sources$, []);
  const [filteredData, setFilteredData] = useState<ReportDataSource[]>([]);

  const onReload = useCallback(() => {
    bloc.reload().subscribe();
  }, [bloc]);

  // const columns: ColumnType<ReportDataSource>[] = useMemo(
  //   () => [
  //     {
  //       name: 'Title',
  //       cell: row => (
  //         <div>
  //           {row.name}
  //           <a
  //             onClick={() => {
  //               props.onSelect(row);
  //               modal.close();
  //             }}
  //             className="text-primary ml-2"
  //           >
  //             Select
  //           </a>
  //         </div>
  //       ),
  //     },
  //     {
  //       name: 'Type',
  //       width: '125px',
  //       cell: row => R.upperFirst(row.graphType),
  //     },
  //     {
  //       name: 'Description',
  //       cell: row => row.description,
  //     },
  //     {
  //       name: '',
  //       width: '50px',
  //       cell: source => <TableActions onEdit={() => openGraphModal({ onDone: onReload, graphId: R.last(source.view.split('_')) })} />,
  //     },
  //   ],
  //   [modal, onReload, props],
  // );

  const content = (
    <>
      <ModalHeader>
        <div className="d-flex flex-row " style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 7.5 }}>
          <span>Select Graph</span>
          <Button onClick={() => openGraphModal({ onDone: onReload })}>Add Graph</Button>
        </div>
      </ModalHeader>
      <ModalContent customCss={styles.content}>
        {/* <Table
          // data={R.sortBy(filteredData, c => c.name)}
          columns={columns}
          // highlightOnHover
          // pointerOnHover
          // pagination={false}
          // onRowClicked={row => {
          //   modal.close();
          //   props.onSelect(row);
          // }}
          // onSearch={str => {
          //   setFilteredData(sources.filter(f => f.isGraph).filter(s => s.name.toLowerCase().includes(str.toLowerCase())));
          // }}
        /> */}
      </ModalContent>
    </>
  );

  return <Modal maxWidth="lg">{content}</Modal>;
});
