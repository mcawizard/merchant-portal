import { Subject, Subscription } from 'rxjs';

export class Dispatcher<T> {
  events$ = new Subject<T>();

  dispatch(event: T) {
    this.events$.next(event);
  }

  subscribe(callback: (event: T) => void) {
    return this.events$.subscribe(callback);
  }

  unsubscribe(subscription: Subscription) {
    subscription.unsubscribe();
  }

  unsubscribeAll() {
    this.events$.unsubscribe();
  }
}
