import React, { memo, PropsWithChildren } from 'react';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { AppModule } from '@business/entities/permission';
import { PermissionService } from '@business/services/permission_service';

export interface HasPermissionsProps {
  module: AppModule;
}

export const HasPermissions = memo((props: PropsWithChildren<HasPermissionsProps>) => {
  const { module } = props;
  const user = useObservable(Session.user$);

  if (PermissionService.canView(user, module)) return props.children;

  return <></>;
});
