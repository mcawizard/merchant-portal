import { BaseBloc } from '@core/utils/bloc';
import { TokenData } from '@core/utils/ioc';
import { UserBloc } from './user_bloc';
import { Blocs } from './tokens';
import { SettingsBloc } from './settings_bloc';
import { SubmissionBloc } from './submission_bloc';

export const BLOCS: [TokenData<BaseBloc>, Constructor<BaseBloc>][] = [
  [Blocs.user, UserBloc],
  [Blocs.settings, SettingsBloc],
  [Blocs.submission, SubmissionBloc],
];
