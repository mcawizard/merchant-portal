import { JobResponse } from '../job';

export enum MessageType {
  jobs = 'jobs',
  websites = 'websites',
}

export interface UserMessage {
  kind: MessageType;
  data: JobResponse;
}
