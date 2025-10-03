import { t } from 'ttag';

export const REQUEST_MESSAGES = {
  /* fetch */

  fetch_general_error: () => t`Error occured while getting data`,
  fetch_settings_error: () => t`Unable to fetch settings`,
  update_general_error: () => t`Error occured while updating data`,
  fetch_tools_error: () => t`Unable to fetch tools`,

  fetch_users_error: () => t`Unable to fetch users`,
  fetch_error: () => t`Unable to fetch items`,
  fetch_jobs_error: () => t`Unable to fetch jobs`,
  dismiss_job_error: () => t`Unable to dismiss jobs`,
  ds_config_error: () => t`Invalid Feed configuration`,
  global_search: () => t`Error occured while searching`,
  fetch_dashboards_error: () => t`Unable to fetch dashboards`,
  fetch_dashboard_emails_error: () => t`Unable to fetch dashboard Emails`,
  fetch_report_error: () => t`Unable to fetch reports`,
  update_template_section_sort: () => t`Unable to order sections`,
  fetch_departments_error: () => t`Unable to fetch departments`,
  /* user messages */
  fetch_user_error: () => t`Unable to fetch users`,
  fetch_agent_executions_error: () => t`Unable to fetch agent executions`,

  fetch_kpi_report_error: () => t`Unable to fetch kpi reports`,
  fetch_phones_error: () => t`Unable to fetch phone numbers`,

  fetch_workflow_executions_error: () => t`Unable to fetch workflow executions`,

  fetch_prompt_history_versions_error: () => t`Unable to fetch prompt history versions`,
  fetch_current_prompt_history_version_error: () => t`Unable to fetch current prompt history version`,

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

  create_dashboard_email: () => ({
    success: t`Dashboard email created successfully`,
    error: t`Unable to create dashboard email`,
  }),

  update_dashboard_email: () => ({
    success: t`Dashboard email updated successfully`,
    error: t`Unable to update dashboard email`,
  }),

  delete_dashboard_email: () => ({
    success: t`Dashboard email deleted successfully`,
    error: t`Unable to delete dashboard email`,
  }),

  create_report: () => ({
    success: t`Report created successfully`,
    error: t`Unable to create report`,
  }),
  update_report: () => ({
    success: t`Report updated successfully`,
    error: t`Unable to update report`,
  }),
  copy_report: () => ({
    success: t`Report duplicated successfully`,
    error: t`Unable to duplicate report`,
  }),
  delete_report: () => ({
    success: t`Report deleted successfully`,
    error: t`Unable to delete report`,
  }),

  /* help_article messages */
  fetch_help_article_error: () => t`Unable to fetch help articles`,

  /* supplier messages */
  fetch_supplier_error: () => t`Unable to fetch suppliers`,

  create_supplier: () => ({
    success: t`Supplier created successfully`,
    error: t`Unable to create supplier`,
  }),

  update_supplier: () => ({
    success: t`Supplier updated successfully`,
    error: t`Unable to update supplier`,
  }),

  delete_supplier: () => ({
    success: t`Supplier deleted successfully`,
    error: t`Unable to delete supplier`,
  }),

  /* currency messages */
  fetch_currency_error: () => t`Unable to fetch currencies`,

  create_currency: () => ({
    success: t`Currency created successfully`,
    error: t`Unable to create currency`,
  }),

  update_currency: () => ({
    success: t`Currency updated successfully`,
    error: t`Unable to update currency`,
  }),

  delete_currency: () => ({
    success: t`Currency deleted successfully`,
    error: t`Unable to delete currency`,
  }),

  /* country messages */
  fetch_country_error: () => t`Unable to fetch countries`,

  create_country: () => ({
    success: t`Country created successfully`,
    error: t`Unable to create country`,
  }),

  update_country: () => ({
    success: t`Country updated successfully`,
    error: t`Unable to update country`,
  }),

  delete_country: () => ({
    success: t`Country deleted successfully`,
    error: t`Unable to delete country`,
  }),

  /* pricing_tier messages */
  fetch_pricing_tier_error: () => t`Unable to fetch pricing tiers`,

  create_pricing_tier: () => ({
    success: t`Pricing tier created successfully`,
    error: t`Unable to create pricing tier`,
  }),

  update_pricing_tier: () => ({
    success: t`Pricing tier updated successfully`,
    error: t`Unable to update pricing tier`,
  }),

  delete_pricing_tier: () => ({
    success: t`Pricing tier deleted successfully`,
    error: t`Unable to delete pricing tier`,
  }),

  /* brand messages */
  fetch_brand_error: () => t`Unable to fetch brands`,

  create_brand: () => ({
    success: t`Brand created successfully`,
    error: t`Unable to create brand`,
  }),

  update_brand: () => ({
    success: t`Brand updated successfully`,
    error: t`Unable to update brand`,
  }),

  delete_brand: () => ({
    success: t`Brand deleted successfully`,
    error: t`Unable to delete brand`,
  }),

  /* category messages */
  fetch_category_error: () => t`Unable to fetch categories`,

  create_category: () => ({
    success: t`Category created successfully`,
    error: t`Unable to create category`,
  }),

  update_category: () => ({
    success: t`Category updated successfully`,
    error: t`Unable to update category`,
  }),

  delete_category: () => ({
    success: t`Category deleted successfully`,
    error: t`Unable to delete category`,
  }),

  /* customer_roles messages */
  fetch_customer_roles_error: () => t`Unable to fetch customer role`,

  create_customer_roles: () => ({
    success: t`Customer role created successfully`,
    error: t`Unable to create customer role`,
  }),

  update_customer_roles: () => ({
    success: t`Customer role updated successfully`,
    error: t`Unable to update customer role`,
  }),

  delete_customer_roles: () => ({
    success: t`Customer role deleted successfully`,
    error: t`Unable to delete customer role`,
  }),

  /* idea messages */
  fetch_idea_error: () => t`Unable to fetch ideas`,

  create_idea: () => ({
    success: t`Idea created successfully`,
    error: t`Unable to create idea`,
  }),

  update_idea: () => ({
    success: t`Idea updated successfully`,
    error: t`Unable to update idea`,
  }),

  delete_idea: () => ({
    success: t`Idea deleted successfully`,
    error: t`Unable to delete idea`,
  }),

  idea_vote: () => ({
    success: t`Vote saved successfully`,
    error: t`Unable to save vote`,
  }),
  create_comment: () => ({
    success: t`Comment saved successfully`,
    error: t`Unable to save comment`,
  }),

  /* media messages */
  fetch_media_error: () => t`Unable to fetch media`,

  create_media: () => ({
    success: t`Media created successfully`,
    error: t`Unable to create media`,
  }),

  update_media: () => t`Unable to update media`,
  delete_media: () => ({
    success: t`Media deleted successfully`,
    error: t`Unable to delete media`,
  }),

  /* region messages */
  fetch_region_error: () => t`Unable to fetch regions`,

  create_region: () => ({
    success: t`Region created successfully`,
    error: t`Unable to create region`,
  }),

  update_region: () => ({
    success: t`Region updated successfully`,
    error: t`Unable to update region`,
  }),

  delete_region: () => ({
    success: t`Region deleted successfully`,
    error: t`Unable to delete region`,
  }),

  /* filter messages */
  fetch_filter_error: () => t`Unable to fetch filters`,

  create_filter: () => ({
    success: t`Filter created successfully`,
    error: t`Unable to create filter`,
  }),

  update_filter: () => ({
    success: t`Filter updated successfully`,
    error: t`Unable to update filter`,
  }),

  delete_filter: () => ({
    success: t`Filter deleted successfully`,
    error: t`Unable to delete filter`,
  }),

  /* retailers messages */
  fetch_retailers_error: () => t`Unable to fetch retailers`,

  create_retailers: () => ({
    success: t`Retailers created successfully`,
    error: t`Unable to create retailers`,
  }),

  update_retailers: () => ({
    success: t`Retailers updated successfully`,
    error: t`Unable to update retailers`,
  }),

  delete_retailers: () => ({
    success: t`Retailers deleted successfully`,
    error: t`Unable to delete retailers`,
  }),
  /* product messages */
  fetch_product_error: () => t`Unable to fetch products`,

  create_product: () => ({
    success: t`Product created successfully`,
    error: t`Unable to create product`,
  }),

  update_product: () => ({
    success: t`Product updated successfully`,
    error: t`Unable to update product`,
  }),

  delete_product: () => ({
    success: t`Product deleted successfully`,
    error: t`Unable to delete product`,
  }),

  /* tag messages */
  fetch_tag_error: () => t`Unable to fetch tags`,

  create_tag: () => ({
    success: t`Tag created successfully`,
    error: t`Unable to create tag`,
  }),

  update_tag: () => ({
    success: t`Tag updated successfully`,
    error: t`Unable to update tag`,
  }),

  delete_tag: () => ({
    success: t`Tag deleted successfully`,
    error: t`Unable to delete tag`,
  }),

  /* labor_type messages */
  fetch_labor_type_error: () => t`Unable to fetch labor phases`,

  create_labor_type: () => ({
    success: t`Labor phase created successfully`,
    error: t`Unable to create labor phase`,
  }),

  update_labor_type: () => ({
    success: t`Labor phase updated successfully`,
    error: t`Unable to update labor phase`,
  }),

  delete_labor_type: () => ({
    success: t`Labor phase deleted successfully`,
    error: t`Unable to delete labor phase`,
  }),

  /* related_products messages */
  fetch_related_products_error: () => t`Unable to fetch related product`,

  create_related_products: () => ({
    success: t`Related product created successfully`,
    error: t`Unable to create related product`,
  }),

  update_related_products: () => ({
    success: t`Related product updated successfully`,
    error: t`Unable to update related product`,
  }),

  delete_related_products: () => ({
    success: t`Related product deleted successfully`,
    error: t`Unable to delete related product`,
  }),

  create_related_product_item: () => ({
    success: t`Related product item created successfully`,
    error: t`Unable to create related product item`,
  }),

  delete_related_product_item: () => ({
    success: t`Related product item deleted successfully`,
    error: t`Unable to delete related product item`,
  }),
  /* product_group messages */
  fetch_product_group_error: () => t`Unable to fetch product group`,

  create_product_group: () => ({
    success: t`Product group created successfully`,
    error: t`Unable to create product group`,
  }),

  update_product_group: () => ({
    success: t`Product group updated successfully`,
    error: t`Unable to update product group`,
  }),

  delete_product_group: () => ({
    success: t`Product group deleted successfully`,
    error: t`Unable to delete product group`,
  }),

  create_product_group_item: () => ({
    success: t`Product group item created successfully`,
    error: t`Unable to create product group item`,
  }),

  delete_product_group_item: () => ({
    success: t`Product group item deleted successfully`,
    error: t`Unable to delete product group item`,
  }),

  /* custom_field messages */
  fetch_custom_field_error: () => t`Unable to fetch custom fields`,

  create_custom_field: () => ({
    success: t`Custom field created successfully`,
    error: t`Unable to create custom field`,
  }),

  update_custom_field: () => ({
    success: t`Custom field updated successfully`,
    error: t`Unable to update custom field`,
  }),

  delete_custom_field: () => ({
    success: t`Custom field deleted successfully`,
    error: t`Unable to delete custom field`,
  }),

  /* related_groups messages */
  fetch_related_groups_error: () => t`Unable to fetch related groups`,

  create_related_groups: () => ({
    success: t`Related group created successfully`,
    error: t`Unable to create related group`,
  }),

  update_related_groups: () => ({
    success: t`Related group updated successfully`,
    error: t`Unable to update related group`,
  }),

  delete_related_groups: () => ({
    success: t`Related group deleted successfully`,
    error: t`Unable to delete related group`,
  }),

  create_related_group_item: () => ({
    success: t`Related group item created successfully`,
    error: t`Unable to create related group item`,
  }),

  delete_related_group_item: () => ({
    success: t`Related group item deleted successfully`,
    error: t`Unable to delete related group item`,
  }),

  /* product_feed messages */
  fetch_product_feed_error: () => t`Unable to fetch product feeds`,

  create_product_feed: () => ({
    success: t`Product feed created successfully`,
    error: t`Unable to create product feed`,
  }),

  update_product_feed: () => ({
    success: t`Product feed updated successfully`,
    error: t`Unable to update product feed`,
  }),

  delete_product_feed: () => ({
    success: t`Product feed deleted successfully`,
    error: t`Unable to delete product feed`,
  }),

  sync_product_feed: () => ({
    success: t`Product feed queued successfully`,
    error: t`Unable to sync product feed`,
  }),

  /* customer messages */
  fetch_customer_error: () => t`Unable to fetch customers`,

  create_customer: () => ({
    success: t`Customer created successfully`,
    error: t`Unable to create customer`,
  }),

  update_customer: () => ({
    success: t`Customer updated successfully`,
    error: t`Unable to update customer`,
  }),

  delete_customer: () => ({
    success: t`Customer deleted successfully`,
    error: t`Unable to delete customer`,
  }),

  /* customer_card messages */
  fetch_customer_card_error: () => t`Unable to fetch payment methods`,

  create_customer_card: () => ({
    success: t`Payment method created successfully`,
    error: t`Unable to create payment method`,
  }),

  update_customer_card: () => ({
    success: t`Payment method updated successfully`,
    error: t`Unable to update payment method`,
  }),

  delete_customer_card: () => ({
    success: t`Payment method deleted successfully`,
    error: t`Unable to delete payment method`,
  }),

  order: () => ({
    success: t`Order placed successfully`,
    error: t`Unable to place order`,
  }),

  cart: t`Unable to update cart`,
  cart_total: t`Unable to get cart totals`,

  /* order messages */
  fetch_order_error: () => t`Unable to fetch orders`,

  create_order: () => ({
    success: t`Order created successfully`,
    error: t`Unable to create order`,
  }),

  update_order: t`Unable to update order`,

  delete_order: () => ({
    success: t`Order deleted successfully`,
    error: t`Unable to delete order`,
  }),

  /* customer_status messages */
  fetch_customer_status_error: () => t`Unable to fetch customer status`,

  create_customer_status: () => ({
    success: t`Customer status created successfully`,
    error: t`Unable to create customer status`,
  }),

  update_customer_status: () => ({
    success: t`Customer status updated successfully`,
    error: t`Unable to update customer status`,
  }),

  delete_customer_status: () => ({
    success: t`Customer status deleted successfully`,
    error: t`Unable to delete customer status`,
  }),

  /* integration messages */
  fetch_integration_error: () => t`Unable to fetch integrations`,

  create_integration: () => ({
    success: t`Integration created successfully`,
    error: t`Unable to create integration`,
  }),

  update_integration: () => ({
    success: t`Integration updated successfully`,
    error: t`Unable to update integration`,
  }),

  delete_integration: () => ({
    success: t`Integration deleted successfully`,
    error: t`Unable to delete integration`,
  }),

  /* coupons messages */
  fetch_coupons_error: () => t`Unable to fetch coupons`,

  create_coupons: () => ({
    success: t`Coupon created successfully`,
    error: t`Unable to create coupon`,
  }),

  update_coupons: () => ({
    success: t`Coupon updated successfully`,
    error: t`Unable to update coupon`,
  }),

  delete_coupons: () => ({
    success: t`Coupon deleted successfully`,
    error: t`Unable to delete coupon`,
  }),
  /* edit_adress messages */
  fetch_address_error: () => t`Unable to fetch addresses`,

  create_address: () => ({
    success: t`Address created successfully`,
    error: t`Unable to create address`,
  }),

  update_address: () => ({
    success: t`Address updated successfully`,
    error: t`Unable to update address`,
  }),

  delete_address: () => ({
    success: t`Address deleted successfully`,
    error: t`Unable to delete address`,
  }),

  /* blogs messages */
  fetch_blogs_error: () => t`Unable to fetch blog`,

  create_blogs: () => ({
    success: t`Blog created successfully`,
    error: t`Unable to create blog`,
  }),

  update_blogs: () => ({
    success: t`Blog updated successfully`,
    error: t`Unable to update blog`,
  }),

  delete_blogs: () => ({
    success: t`Blog deleted successfully`,
    error: t`Unable to delete blog`,
  }),

  duplicate_blogs: () => ({
    success: t`Blog duplicate successfully`,
    error: t`Unable to duplicate blog`,
  }),

  /* blog_categories messages */
  fetch_blog_categories_error: () => t`Unable to fetch blog category`,

  create_blog_categories: () => ({
    success: t`Blog category created successfully`,
    error: t`Unable to create blog category`,
  }),

  update_blog_categories: () => ({
    success: t`Blog category updated successfully`,
    error: t`Unable to update blog category`,
  }),

  delete_blog_categories: () => ({
    success: t`Blog category deleted successfully`,
    error: t`Unable to delete blog category`,
  }),

  /* subscriptions messages */
  fetch_subscriptions_error: () => t`Unable to fetch subscriptions`,

  subscription: () => ({
    success: t`Subscription create successfully`,
    error: t`Unable to create Subscription`,
  }),

  create_subscriptions: () => ({
    success: t`Subscriptions created successfully`,
    error: t`Unable to create subscriptions`,
  }),

  update_subscriptions: () => ({
    success: t`Subscriptions updated successfully`,
    error: t`Unable to update subscriptions`,
  }),

  delete_subscriptions: () => ({
    success: t`Subscriptions deleted successfully`,
    error: t`Unable to delete subscriptions`,
  }),

  create_subscription_settings: () => ({
    success: t`Subscription Settings update successfully`,
    error: t`Unable to update subscription settings`,
  }),
  /* menu messages */
  fetch_menu_error: () => t`Unable to fetch menus`,

  create_menu: () => ({
    success: t`Menu created successfully`,
    error: t`Unable to create menu`,
  }),

  update_menu: () => ({
    success: t`Menu updated successfully`,
    error: t`Unable to update menu`,
  }),

  delete_menu: () => ({
    success: t`Menu deleted successfully`,
    error: t`Unable to delete menu`,
  }),

  fetch_theme_error: () => t`Unable to fetch theme setting`,

  create_theme_settings: () => ({
    success: t`Theme Settings create successfully`,
    error: t`Unable to create Theme settings`,
  }),
  default_menu_error: () => t`Unable to delete default menu`,

  fetch_menu_item_error: () => t`Unable to fetch menus items`,

  create_item_menu: () => ({
    success: t`Menu item created successfully`,
    error: t`Unable to create menu item`,
  }),

  update_item_menu: () => ({
    success: t`Menu item updated successfully`,
    error: t`Unable to update menu item`,
  }),

  delete_item_menu: () => ({
    success: t`Menu item deleted successfully`,
    error: t`Unable to delete menu item`,
  }),

  update_menu_setting: () => ({
    success: t`Menu Setting updated successfully`,
    error: t`Unable to update menu Setting`,
  }),

  /* forms messages */
  fetch_forms_error: () => t`Unable to fetch forms`,

  create_forms: () => ({
    success: t`Forms created successfully`,
    error: t`Unable to create forms`,
  }),

  update_forms: () => ({
    success: t`Forms updated successfully`,
    error: t`Unable to update forms`,
  }),

  clone_form: () => ({
    success: t`Forms cloned successfully`,
    error: t`Unable to clone forms`,
  }),

  delete_forms: () => ({
    success: t`Forms deleted successfully`,
    error: t`Unable to delete forms`,
  }),

  /* profile_menu messages */
  fetch_profile_menu_error: () => t`Unable to fetch profile menus`,

  create_profile_menu: () => ({
    success: t`Profile menu created successfully`,
    error: t`Unable to create profile menu`,
  }),

  update_profile_menu: () => ({
    success: t`Profile menu updated successfully`,
    error: t`Unable to update profile menu`,
  }),

  delete_profile_menu: () => ({
    success: t`Profile menu deleted successfully`,
    error: t`Unable to delete profile menu`,
  }),
  fetch_page_error: () => t`Unable to fetch pages`,

  create_page: () => ({
    success: t`Page created successfully`,
    error: t`Unable to create page`,
  }),

  update_page: () => ({
    success: t`Page updated successfully`,
    error: t`Unable to update page`,
  }),

  delete_page: () => ({
    success: t`Page deleted successfully`,
    error: t`Unable to delete page`,
  }),

  /* websites messages */
  fetch_websites_error: () => t`Unable to fetch websites`,

  create_websites: () => ({
    success: t`Websites created successfully`,
    error: t`Unable to create websites`,
  }),

  update_websites: () => ({
    success: t`Websites updated successfully`,
    error: t`Unable to update websites`,
  }),

  delete_websites: () => ({
    success: t`Websites deleted successfully`,
    error: t`Unable to delete websites`,
  }),

  /* credential messages */
  fetch_credential_error: () => t`Unable to fetch credentials`,

  create_credential: () => ({
    success: t`Credential created successfully`,
    error: t`Unable to create credential`,
  }),

  update_credential: () => ({
    success: t`Credential updated successfully`,
    error: t`Unable to update credential`,
  }),

  delete_credential: () => ({
    success: t`Credential deleted successfully`,
    error: t`Unable to delete credential`,
  }),

  /* chat messages */
  fetch_chat_error: () => t`Unable to fetch chats`,

  create_chat: () => ({
    success: t`Chat created successfully`,
    error: t`Unable to create chat`,
  }),

  update_chat: () => ({
    success: t`Chat updated successfully`,
    error: t`Unable to update chat`,
  }),

  delete_chat: () => ({
    success: t`Chat deleted successfully`,
    error: t`Unable to delete chat`,
  }),

  /* agents messages */
  fetch_agents_error: () => t`Unable to fetch agents`,

  create_agents: () => ({
    success: t`Agent created successfully`,
    error: t`Unable to create agent`,
  }),

  update_agents: () => ({
    success: t`Agent updated successfully`,
    error: t`Unable to update agent`,
  }),

  delete_agents: () => ({
    success: t`Agent deleted successfully`,
    error: t`Unable to delete agent`,
  }),

  /* form_templates messages */
  fetch_form_templates_error: () => t`Unable to fetch form_templates`,

  create_form_templates: () => ({
    success: t`Form_templates created successfully`,
    error: t`Unable to create form_templates`,
  }),

  update_form_templates: () => ({
    success: t`Form_templates updated successfully`,
    error: t`Unable to update form_templates`,
  }),

  delete_form_templates: () => ({
    success: t`Form_templates deleted successfully`,
    error: t`Unable to delete form_templates`,
  }),

  /* agent_page messages */
  fetch_agent_page_error: () => t`Unable to fetch agent_pages`,

  create_agent_page: () => ({
    success: t`Agent_page created successfully`,
    error: t`Unable to create agent_page`,
  }),

  update_agent_page: () => ({
    success: t`Agent_page updated successfully`,
    error: t`Unable to update agent_page`,
  }),

  delete_agent_page: () => ({
    success: t`Agent_page deleted successfully`,
    error: t`Unable to delete agent_page`,
  }),

  /* folder_file_manager messages */
  fetch_folder_manager_error: () => t`Unable to fetch library`,

  create_folder_manager: () => ({
    success: t`Folder created successfully`,
    error: t`Unable to create folder`,
  }),

  update_folder_manager: () => ({
    success: t`Folder updated successfully`,
    error: t`Unable to update folder`,
  }),

  delete_folder_manager: () => ({
    success: t`Folder deleted successfully`,
    error: t`Unable to delete folder`,
  }),

  /* folder_file_manager messages */
  fetch_file_manager_error: () => t`Unable to fetch files`,

  create_file_manager: () => ({
    success: t`Files created successfully`,
    error: t`Unable to create file`,
  }),

  update_file_manager: () => ({
    success: t`Files updated successfully`,
    error: t`Unable to update file`,
  }),

  delete_file_manager: () => ({
    success: t`Files deleted successfully`,
    error: t`Unable to delete file`,
  }),
  oauth_url_error: () => t`Unable to fetch oauth url`,

  /* workflow messages */
  fetch_workflow_error: () => t`Unable to fetch workflows`,

  create_workflow: () => ({
    success: t`Workflow created successfully`,
    error: t`Unable to create workflow`,
  }),

  update_workflow: () => ({
    success: t`Workflow updated successfully`,
    error: t`Unable to update workflow`,
  }),

  delete_workflow: () => ({
    success: t`Workflow deleted successfully`,
    error: t`Unable to delete workflow`,
  }),

  execute_workflow: () => ({
    success: t`Workflow executed successfully`,
    error: t`Unable to execute workflow`,
  }),

  create_departments: () => ({
    success: t`Departments created successfully`,
    error: t`Unable to create departments`,
  }),

  update_departments: () => ({
    success: t`Departments updated successfully`,
    error: t`Unable to update departments`,
  }),

  delete_departments: () => ({
    success: t`Departments deleted successfully`,
    error: t`Unable to delete departments`,
  }),

  sync_departments: () => ({
    success: t`Departments synced successfully`,
    error: t`Unable to sync departments`,
  }),

  /* mcp_client messages */
  fetch_mcp_client_error: () => t`Unable to fetch mcp_clients`,

  create_mcp_client: () => ({
    success: t`Tools and Connections created successfully`,
    error: t`Unable to create mcp_client`,
  }),

  update_mcp_client: () => ({
    success: t`Tools and Connections updated successfully`,
    error: t`Unable to update mcp_client`,
  }),

  delete_mcp_client: () => ({
    success: t`Tools and Connections deleted successfully`,
    error: t`Unable to delete mcp_client`,
  }),

  sync_mcp_client: () => ({
    success: t`Tools and Connections synced successfully`,
    error: t`Unable to delete mcp_client`,
  }),

  import_agent: () => ({
    success: t`Agent imported successfully`,
    error: t`Unable to import agent`,
  }),

  toggle_workflow_status: () => ({
    success: t`Workflow updated successfully`,
    error: t`Unable to update workflow`,
  }),

  create_phone: () => ({
    success: t`Phone created successfully`,
    error: t`Unable to create phone`,
  }),

  update_phone: () => ({
    success: t`Phone updated successfully`,
    error: t`Unable to update phone`,
  }),

  delete_phone: () => ({
    success: t`Phone deleted successfully`,
    error: t`Unable to delete phone`,
  }),

  save_form_fields: () => ({
    success: t`Form fields saved successfully`,
    error: t`Unable to save form fields`,
  }),

  /* org_board messages */
  fetch_org_board_error: () => t`Unable to fetch org_boards`,

  create_org_board: () => ({
    success: t`Org_board created successfully`,
    error: t`Unable to create org_board`,
  }),

  update_org_board: () => ({
    success: t`Org_board updated successfully`,
    error: t`Unable to update org_board`,
  }),

  delete_org_board: () => ({
    success: t`Org_board deleted successfully`,
    error: t`Unable to delete org_board`,
  }),

  save_output: () => ({
    success: t`Data saved successfully`,
    error: t`Unable to save data`,
  }),

  create_prompt_history_version: () => ({
    success: t`Prompt history version created successfully`,
    error: t`Unable to create prompt history version`,
  }),

  restore_prompt_history_version: () => ({
    success: t`Prompt history version restored successfully`,
    error: t`Unable to restore prompt history version`,
  }),

  purchase_agent: () => ({
    success: t`Agent purchased successfully`,
    error: t`Unable to purchase agent`,
  }),
};
