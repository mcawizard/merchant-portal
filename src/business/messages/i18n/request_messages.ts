import { t } from 'ttag';

export const REQUEST_MESSAGES = {
  /* fetch */

  fetch_general_error: () => t`Error occured while getting data`,
  fetch_settings_error: () => t`Unable to fetch settings`,
  fetch_submission_error: () => t`Unable to fetch submissions`,
  fetch_merchant_notes_error: () => t`Unable to fetch merchant notes`,
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

  file_uploaded: () => ({
    success: t`File uploaded successfully`,
    error: t`Unable to upload file`,
  }),

  create_note: () => ({
    success: t`Note created successfully`,
    error: t`Unable to create note`,
  }),

  send_payoff_request: () => ({
    success: t`Payoff request sent successfully`,
    error: t`Unable to send payoff request`,
  }),

  send_renewal_request: () => ({
    success: t`Renewal request sent successfully`,
    error: t`Unable to send renewal request`,
  }),
};
