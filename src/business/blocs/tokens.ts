import { createToken } from '@core/utils/ioc';
import { UserBloc } from './user_bloc';
import { SettingsBloc } from './settings_bloc';
import { SubmissionBloc } from './submission_bloc';
import { FileCategoriesBloc } from './file_categories_bloc';
import { DealFileBloc } from './deal_file_bloc';
import { MerchantNoteBloc } from './merchant_note_bloc';
import { ApplicationSubmissionBloc } from './application_submission_bloc';

export const Blocs = {
  user: createToken<UserBloc>(),
  settings: createToken<SettingsBloc>(),
  submission: createToken<SubmissionBloc>(),
  fileCategory: createToken<FileCategoriesBloc>(),
  dealFile: createToken<DealFileBloc>(),
  merchantNote: createToken<MerchantNoteBloc>(),
  applicationSubmission: createToken<ApplicationSubmissionBloc>(),
};
