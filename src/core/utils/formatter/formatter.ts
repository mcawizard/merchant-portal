import { DATE_FORMAT, DATE_TIME_FORMAT } from '@business/constants/time';
import { R } from '../r';
import { TimeInput, toMoment } from '../time';

export function formatRate(value: number, currency: string | { code: string } | null = null) {
  return currency ? formatCurrency(value, currency, 0) : formatDecimal(value, 0);
}

export function formatCurrency(value: number | null | undefined, currency: string | { code: string } | null = null, fractionDigits = 2) {
  if (R.isNil(value)) return '';

  const code = R.isString(currency) ? currency : (currency && currency.code) || null;

  return new Intl.NumberFormat('en', {
    style: code ? 'currency' : 'decimal',
    currency: code || undefined,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatDecimal(value: number, fractionDigits: number | null = null, minimumFractionDigits: number | null = null) {
  if (R.isNil(value)) return '';

  if (fractionDigits === null) {
    fractionDigits = 2;
  }

  if (minimumFractionDigits === null) {
    minimumFractionDigits = fractionDigits;
  }

  return new Intl.NumberFormat('en', {
    style: 'decimal',
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatInteger(value: number) {
  return formatDecimal(value, 0);
}

export function formatPercent(value: number, fractionDigits = 0) {
  if (R.isNil(value)) return '';

  return formatDecimal(value, fractionDigits) + '%';
}

export function formatTime(value: TimeInput | null | undefined, format: string = DATE_FORMAT, options: { utc?: boolean; utcOffset?: number } = {}) {
  const utc = options.utc !== false && R.isNumber(options.utcOffset);

  const m = value && toMoment(value, { utc });
  if (!m || !m.isValid()) return '';

  if (R.isNumber(options.utcOffset)) {
    m.add(options.utcOffset, 'minutes');
  }

  return m.format(format);
}

export function formatDateTime(value: TimeInput | null | undefined, options: { utc?: boolean; utcOffset?: number } = {}) {
  return formatTime(value, DATE_TIME_FORMAT, options);
}

export function formatTimeRelative(value: TimeInput | null | undefined, numbersOnly?: boolean, options: { utc?: boolean; utcOffset?: number } = {}) {
  const utc = options.utc !== false && R.isNumber(options.utcOffset);

  const m = value && toMoment(value, { utc });
  if (!m || !m.isValid()) return '';

  if (R.isNumber(options.utcOffset)) {
    m.add(options.utcOffset, 'minutes');
  }

  if (m.isSame(new Date(), 'day')) {
    return m.format('hh:mma');
  } else if (m.isSame(new Date(), 'year')) {
    if (numbersOnly) {
      return m.format('MM/DD');
    }
    return m.format('MMM DD');
  } else {
    if (numbersOnly) {
      return m.format('MM/DD/YYYY');
    }
    return m.format('MMM DD, YYYY');
  }
}

export function formatTimeForLogs(value: TimeInput | null | undefined, options: { utc?: boolean; utcOffset?: number } = {}) {
  const utc = options.utc !== false && R.isNumber(options.utcOffset);

  const m = value && toMoment(value, { utc });
  if (!m || !m.isValid()) return '';

  if (R.isNumber(options.utcOffset)) {
    m.add(options.utcOffset, 'minutes');
  }

  if (m.isSame(new Date(), 'year')) {
    return m.format('MM/DD hh:mm:ss a');
  } else {
    return m.format('MM/DD/YYYY hh:mm:ss a');
  }
}

export function formatUsername(firstname: string | null | undefined, lastname: string | null | undefined) {
  return R.compact([firstname, lastname]).join(' ');
}
