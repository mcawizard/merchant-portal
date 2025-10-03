import React, { memo, useEffect, useMemo } from 'react';
import { formControl, formGroup, useFormConfig } from '@core/utils/form';
import { FormSelect } from '@core/components/form';
import { Row, Col, Button } from 'reactstrap';
import { tap } from 'rxjs/operators';
import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { ProductGroupResponse } from '@business/entities/product_group';
import { ProductGroupsPageBloc } from '@modules/product_group/ProductGroupsPage/ProductGroupsPageBloc';
import { ProductGroupAPI } from '@business/api/product_group_api';

export interface FeatureProductsProps {
  groupId: string;
  onSelect(groupId: string, productGroups: ProductGroupResponse[]): void;
}

export const FeatureProducts = memo(({ onSelect, groupId }: FeatureProductsProps) => {
  const bloc = useBloc(ProductGroupsPageBloc);
  const productGroups = useObservable(bloc.productGroups$, []);
  const control = useMemo(
    () =>
      formGroup({
        groupId: formControl<string>({ initialValue: groupId || '' }),
      }),
    [groupId],
  );

  useEffect(() => {
    if (!groupId) return;
    control.controls.groupId.setValue(String(groupId));
  }, [groupId, productGroups, control.controls.groupId]);

  useFormConfig(control, {
    onSubmit: value => {
      ProductGroupAPI.read(value.groupId)
        .pipe(tap(res => onSelect(value.groupId, res as unknown as ProductGroupResponse[])))
        .subscribe();
    },
  });

  return (
    <div className="mb-4">
      <Row>
        <Col md="12">
          <FormSelect
            control={control.controls.groupId}
            items={productGroups}
            labelAccessor={item => item.title}
            valueAccessor={item => String(item.id)}
          />
          <Button onClick={() => control.submit()} color="primary">
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
});
