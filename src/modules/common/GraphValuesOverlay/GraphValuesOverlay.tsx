import React, { memo, useCallback, useMemo, useEffect, useState, Fragment } from 'react';
import { t } from 'ttag';
import { css } from '@emotion/react';
import { useBloc } from '@core/utils/bloc';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction, ModalDrawer } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { FormSelect, FormInput, FormDateInput, FormDateRangeInput } from '@core/components/form';
import { useFormConfig, useFormState, formGroup, formControl, FormDataType, Validators } from '@core/utils/form';
import { CommonService } from '@business/services';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { GraphValuesOverlayBloc } from './GraphValuesOverlayBloc';
import { tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GraphValueResponse } from '@business/entities/graph';
import { toMoment } from '@core/utils/time';
import { R } from '@core/utils/r';
import { DateRangeTypes } from '@business/entities/dynamicReprots';
import { ColumnType } from 'antd/es/table';
import { Table } from '../Table';
// import { Table } from '../Table';

export function getDateRangeValue(defaultRange: DateRangeTypes) {
  switch (defaultRange) {
    case DateRangeTypes.today:
      return `${toMoment().startOf('day').unix()}-${toMoment().endOf('day').unix()}`;
    case DateRangeTypes.yesterday:
      return `${toMoment().subtract(1, 'day').startOf('day').unix()}-${toMoment().subtract(1, 'day').endOf('day').unix()}`;
    case DateRangeTypes.last7:
      return `${toMoment().subtract(7, 'day').unix()}-${toMoment().unix()}`;
    case DateRangeTypes.last30:
      return `${toMoment().subtract(30, 'day').unix()}-${toMoment().unix()}`;
    case DateRangeTypes.month:
      return `${toMoment().startOf('month').unix()}-${toMoment().endOf('month').unix()}`;
    case DateRangeTypes.lastMonth:
      return `${toMoment().subtract(1, 'month').startOf('month').unix()}-${toMoment().subtract(1, 'month').endOf('month').unix()}`;
    case DateRangeTypes.year:
      return `${toMoment().startOf('year').unix()}-${toMoment().endOf('year').unix()}`;
    case DateRangeTypes.lastYear:
      return `${toMoment().subtract(1, 'year').startOf('year').unix()}-${toMoment().subtract(1, 'year').endOf('year').unix()}`;
  }
}
function defineForm(defaultRange: DateRangeTypes, dateRangeValue?: string) {
  return formGroup({
    dateRange: formControl<number>({
      label: 'Date Range',
      // initialValue: dateRangeValue || getDateRangeValue(defaultRange),
    }),
  });
}

const styles = {
  content: css`
    padding: 25px !important;
  `,
};

export interface GraphValuesOverlayProps {
  graphId: string;
  onDone?: () => void;
  dateRange?: string;
}

export type ValueFormData = FormDataType<typeof defineForm>;

export const GraphValuesOverlay = memo((props: GraphValuesOverlayProps) => {
  const { graphId } = props;
  const modal = useModalInstance();
  const bloc = useBloc(GraphValuesOverlayBloc, graphId);
  const form = useMemo(() => defineForm(DateRangeTypes.last30, props.dateRange), [props.dateRange]);
  const formValue = useNonNilObservable(form.value$);
  const values = useObservable(bloc.values$, []);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const valueForm = useMemo(() => formControl<number>({ required: true, validators: [Validators.number] }), []);
  const valueFormValue = useNonNilObservable(valueForm.value$);

  useEffect(() => {
    bloc.fetchValues(formValue.dateRange as any).subscribe();
  }, [bloc, formValue]);

  const onUpdateValue = useCallback(
    (id: string, forDate: number, value: number) => {
      bloc.updateValue(id, forDate, value).subscribe();
    },
    [bloc],
  );

  const columns: ColumnType<GraphValueResponse>[] = useMemo(
    () => [
      {
        name: 'Date',
        cell: i => i.forDateString,
      },
      {
        name: 'Value',
        cell: (i, index) => (
          <>
            {index !== editIndex && (
              <span
                className="d-flex flex-fill"
                onClick={() => {
                  setEditIndex(index);
                  valueForm.setValue(i.value);
                }}
              >
                {i.value}
              </span>
            )}
            {index === editIndex && (
              <FormInput
                type="number"
                autoFocus
                // withoutGroup
                control={valueForm}
                onBlur={() => {
                  setEditIndex(null);
                  onUpdateValue(i.id, i.forDate, valueFormValue!);
                }}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    setEditIndex(null);
                    onUpdateValue(i.id, i.forDate, valueFormValue!);
                  }
                }}
              />
            )}
          </>
        ),
      },
      {
        name: 'By',
        cell: i => i.user,
      },
      {
        name: '',
        width: '50px',
        center: true,
        cell: i => {
          if (!i.id.includes('-')) {
            return (
              <a onClick={() => bloc.deleteValue(i.id).subscribe()}>
                <i className="bx bx-trash text-danger"></i>
              </a>
            );
          }
          return null;
        },
      },
    ],
    [bloc, editIndex, onUpdateValue, valueForm, valueFormValue],
  );

  return (
    <ModalDrawer maxWidth="lg" onClose={props.onDone}>
      <ModalHeader title={'Graph Values'} onClose={props.onDone} />
      <ModalContent formContainer={{ onSubmit: form.submit }} customCss={styles.content}>
        <FormDateInput control={form.controls.dateRange} />
        {/* <div className="d-flex justify-content-end">
          <CSVLink data={values.map(v => ({ Date: v.forDateString, Value: R.toString(v.value) === 'NR' ? '' : v.value }))} filename={'report.csv'}>
            Download CSV
          </CSVLink>
        </div> */}

        <Table
          columns={columns}
          // data={values}
          pagination={false}
          // highlightOnHover
          // striped
        />
      </ModalContent>
    </ModalDrawer>
  );
});
