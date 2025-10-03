import { configureForm } from './configure';
import { resolveMessage } from './form_messages';

export * from './configure';
export * from './form_builder';
export * from './hooks';
export * from './validation';

configureForm({
  resolveValidationMessage: resolveMessage,
});
