import moment from 'moment-timezone';
import { t } from 'ttag';
import { R } from '../r';
import humanizeDuration, { Options } from 'humanize-duration';

export { moment };

export type TimeInput = number | moment.Moment | moment.MomentInputObject | Date | object | string;
export type TimeStep = moment.unitOfTime.DurationConstructor;

export function timeRange(from: TimeInput, to: TimeInput, step: TimeStep = 'day') {
  const dates: number[] = [];

  const m = toMoment(from).startOf(step);
  const end = toMoment(to).endOf(step);

  do {
    dates.push(m.unix());
    m.add(1, step).startOf(step);
  } while (m.isSameOrBefore(end, step));

  return dates;
}

export function parseMoment(value: string, format?: string | null, options?: { strict?: boolean; utc?: boolean }) {
  const utc = options && options.utc === true ? true : false;
  const strict = options && options.strict === false ? false : true;

  return (utc ? moment.utc : moment)(value, format || undefined, strict);
}

export function toMoment(value?: TimeInput | null, options?: { utc?: boolean; clone?: boolean }) {
  const utc = options && options.utc === true ? true : false;
  const clone = options && options.clone === false ? false : true;

  if (moment.isMoment(value)) return clone ? value.clone() : value;
  if (value instanceof Date) {
    value = Math.round(value.valueOf() / 1000);
  }

  if (R.isNumber(value)) {
    value = value * 1000;
  }

  if (R.isNull(value)) value = undefined;

  return (utc ? moment.utc : moment)(value);
}

export function timeDiff(from: TimeInput, to: TimeInput, step: TimeStep = 'day', inclusive = false) {
  const m1 = toMoment(from).startOf(step);
  const m2 = toMoment(to).endOf(step);

  if (inclusive) m1.subtract(1, step);

  return m2.diff(m1, step);
}

export function timeAgo(value: TimeInput) {
  const m = toMoment(value, { utc: false });
  const now = toMoment().unix();

  if (m.unix() >= now) return t`a few seconds ago`;
  return m.fromNow();
}

export const tzMoment = moment.tz;

export function toUTCTime(timestamp: number, keepTime = true) {
  const format = keepTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  return parseMoment(toMoment(timestamp, { utc: false }).format(format), format, { utc: true });
}

export function toLocalTime(timestamp: number, keepTime = true) {
  const format = keepTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  return parseMoment(toMoment(timestamp, { utc: true }).format(format), format, { utc: false });
}

export function getToday(options: { local?: boolean; utc?: boolean; localAsUtc?: boolean; utcAsLocal?: boolean } = {}) {
  let today: moment.Moment;

  if (options.local) {
    today = toMoment(null, { utc: false });
  } else if (options.localAsUtc) {
    today = toUTCTime(toMoment(null, { utc: false }).unix());
  } else if (options.utcAsLocal) {
    today = toLocalTime(toMoment(null, { utc: true }).unix());
  } else {
    today = toMoment(null, { utc: true });
  }

  return today.startOf('date').unix();
}

export function formatSeconds(seconds: number) {
  const h = Math.floor(Math.abs(seconds) / 3600);
  const m = Math.floor((Math.abs(seconds) % 3600) / 60);
  return (seconds < 0 ? '-' : '') + [h, m].map(item => (item < 10 ? `0${item}` : `${item}`)).join(':');
}

export function durationHumanizeReports(seconds: number, options?: Partial<Options>) {
  return humanizeDuration(seconds * 1000, { round: true, units: ['y', 'mo', 'd', 'h', 'm'], ...options });
}
