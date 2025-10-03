import { StorageManager } from './storage';

export const Storage = new StorageManager(localStorage);

export const SessionStorage = new StorageManager(sessionStorage);
