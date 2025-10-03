/* eslint-disable @typescript-eslint/no-empty-function */
import { Observable } from 'rxjs';

export class BaseBloc {
  public onInit(): void | Observable<any> {}

  public onReset(): void {}

  public onDestroy(): void {}
}
