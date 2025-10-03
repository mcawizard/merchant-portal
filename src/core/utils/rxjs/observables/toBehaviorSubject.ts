import { Observable, BehaviorSubject } from 'rxjs';

export function toBehaviorSubject<T>(observable: Observable<T>, initValue: T): BehaviorSubject<T> {
  const subject = new BehaviorSubject(initValue);

  observable.subscribe(
    (x: T) => {
      subject.next(x);
    },
    (err: any) => {
      subject.error(err);
    },
    () => {
      subject.complete();
    },
  );

  return subject;
}
