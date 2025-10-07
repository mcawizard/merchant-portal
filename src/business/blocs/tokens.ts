import { createToken } from '@core/utils/ioc';
import { UserBloc } from './user_bloc';
import { SettingsBloc } from './settings_bloc';
import { SubmissionBloc } from './submission_bloc';

export const Blocs = {
  user: createToken<UserBloc>(),
  settings: createToken<SettingsBloc>(),
  submission: createToken<SubmissionBloc>(),
};
