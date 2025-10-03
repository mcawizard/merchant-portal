import { BehaviorSubject } from 'rxjs';

export const headerOverride$ = new BehaviorSubject<React.ReactNode | null>(null);
