export enum SyncFreqency {
  hourly = '0 * * * *',
  daily = '0 0 * * *',
  weekly = '0 0 * * 0',
  monthly = '0 0 1 * *',
}

export const SYNC_FREQUENCIES = [SyncFreqency.hourly, SyncFreqency.daily, SyncFreqency.weekly, SyncFreqency.monthly];
