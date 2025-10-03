import { of } from 'rxjs';
import { addLocale, useLocale } from 'ttag';
import es from './po/es.po.json';

export enum SupportedLanguage {
  en = 'en',
  es = 'es',
}

export const i18n = {
  locale: SupportedLanguage.en,

  init,
  setLocale,
};

function init() {
  addLocale(SupportedLanguage.es, es);

  setLocale(SupportedLanguage.en);

  return of(null);
}

function setLocale(locale: SupportedLanguage) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLocale(locale);
  i18n.locale = locale;
}
