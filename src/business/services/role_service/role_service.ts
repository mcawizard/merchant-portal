import { UserResponse, UserRole } from '@business/entities/user';

export function getAllRoles() {
  return [UserRole.admin, UserRole.user];
}

export function getRoleName(role: UserRole): string {
  switch (role) {
    case UserRole.admin:
      return 'Admin';
    case UserRole.user:
      return 'User';
    default:
      return 'Unknown';
  }
}

export function isAdmin(user?: UserResponse | null) {
  if (!user) return false;
  return user.role === UserRole.admin;
}
