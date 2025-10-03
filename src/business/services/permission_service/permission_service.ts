import { AppModule } from '@business/entities/permission';
import { UserResponse, UserRole } from '@business/entities/user';

export function canView(user: UserResponse | null, module: AppModule) {
  if (!user) return false;

  if (user.role === UserRole.admin) return true;

  if (user.role === UserRole.user) {
    switch (module) {
      case AppModule.billing:
        return false;
      case AppModule.users:
        return false;
      case AppModule.phones:
        return false;
      case AppModule.buyAgents:
        return false;
      default:
        return true;
    }
  }

  //default to true untill all modules are defined
  return true;
}
