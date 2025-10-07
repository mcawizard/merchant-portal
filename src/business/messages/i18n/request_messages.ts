import { t } from 'ttag';

export const REQUEST_MESSAGES = {
  /* fetch */

  fetch_general_error: () => t`Error occured while getting data`,
  fetch_settings_error: () => t`Unable to fetch settings`,
  fetch_category_error: () => t`Unable to fetch categories`,
  update_general_error: () => t`Error occured while updating data`,
  fetch_tools_error: () => t`Unable to fetch tools`,

  fetch_users_error: () => t`Unable to fetch users`,
  fetch_error: () => t`Unable to fetch items`,
  fetch_jobs_error: () => t`Unable to fetch jobs`,
  dismiss_job_error: () => t`Unable to dismiss jobs`,
  ds_config_error: () => t`Invalid Feed configuration`,
  fetch_report_error: () => t`Unable to fetch reports`,
  /* user messages */
  fetch_user_error: () => t`Unable to fetch users`,

  fetch_output_error: () => t`Unable to fetch output`,
  create_user: () => ({
    success: t`User created successfully`,
    error: t`Unable to create user`,
  }),

  update_user: () => ({
    success: t`User updated successfully`,
    error: t`Unable to update user`,
  }),

  delete_user: () => ({
    success: t`User deleted successfully`,
    error: t`Unable to delete user`,
  }),

  create_dashboard: () => ({
    success: t`Dashboard created successfully`,
    error: t`Unable to create dashboard`,
  }),

  update_dashboard: () => ({
    success: t`Dashboard updated successfully`,
    error: t`Unable to update dashboard`,
  }),

  delete_dashboard: () => ({
    success: t`Dashboard deleted successfully`,
    error: t`Unable to delete dashboard`,
  }),

  // submission messages
  fetch_submission_error: () => t`Unable to fetch prompt history versions`,

  file_uploaded: () => ({
    success: t`File uploaded successfully`,
    error: t`Unable to upload file`,
  }),
};
