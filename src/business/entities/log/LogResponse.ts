export interface LogResponse {
  message: string;
  user: string;
  created: number;
}

export enum ActivityModule {
  ACCOUNT = 'account',
  PROJECTS = 'projects',
  CONTACT = 'contacts',
  BILLING = 'billing',
  TICKETING = 'ticketing',
  SUBSCRIPTIONS = 'subscriptions',
  ORDER = 'order',
}
