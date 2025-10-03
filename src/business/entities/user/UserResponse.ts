export interface UserResponse {
  token?: string;

  id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  role: UserRole;
  companyName?: string;
  accountManager?: { name: string; email: string };
}

export enum UserRole {
  admin = 1,
  user = 2,
}
