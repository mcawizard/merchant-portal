import { UserResponse, UserRole } from '@business/entities/user';
import { Session } from '@modules/auth/session';

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

export function isSystemUser(inUser?: UserResponse | null): boolean {
  const user = inUser || Session.user;
  if (!user) return false;
  if (user.email === 'system@oohcoders.com') return true;
  return false;
}

export function isAdmin(user?: UserResponse | null) {
  return user ? user.role === UserRole.admin : false;
}
