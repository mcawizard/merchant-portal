import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { AvailableNumbersSearchOptions, AvailablePhoneNumber } from '@business/entities/phone';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AvailableNumbersModalBloc extends BaseBloc {
  private readonly phonesBloc = resolve(Blocs.phones);

  loading = new LoadingState();

  // Own BehaviorSubject for available numbers
  private readonly _availableNumbers$ = new BehaviorSubject<AvailablePhoneNumber[]>([]);
  readonly availableNumbers$ = this._availableNumbers$.asObservable();

  public onInit() {
    // Fetch available numbers when modal opens
    this.fetchAvailableNumbers({
      country_code: 'US',
      limit: 20,
    }).subscribe();
  }

  fetchAvailableNumbers = (options?: AvailableNumbersSearchOptions) => {
    return this.phonesBloc.getAvailableNumbers(options).pipe(
      this.loading.run(),
      tap(response => {
        this._availableNumbers$.next(response || []);
      }),
    );
  };

  buyPhoneNumber = (phoneNumber: string) => {
    return this.phonesBloc.buyPhoneNumber(phoneNumber).pipe(
      this.loading.run(),
      tap(() => {
        // Remove the bought number from available numbers list
        const currentNumbers = this._availableNumbers$.value;
        const updatedNumbers = currentNumbers.filter(num => num.phone_number !== phoneNumber);
        this._availableNumbers$.next(updatedNumbers);
      }),
    );
  };
}
