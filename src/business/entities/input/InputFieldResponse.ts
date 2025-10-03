export interface InputFieldResponse {
  name: string;
  title: string;
  type: 'string' | 'number' | 'boolean';
  required: boolean;
  password: boolean;
  description?: string;
}
