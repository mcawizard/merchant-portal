export interface UserResponse {
  token?: string;

  id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  image_path: string;
  role: UserRole;
  companyName?: string;
}

export enum UserRole {
  admin = 1,
  user = 2,
}
