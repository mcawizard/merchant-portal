import { TextEditorToolbarConfig } from './types';

export type ToolbarPreset = 'default' | 'heading' | 'text';

export const TOOLBAR_PRESETS: Record<ToolbarPreset, TextEditorToolbarConfig> = {
  default: {
    // buttons: ['heading', '|', 'bold', 'italic', 'underline', '|', 'color'],
    buttons: ['heading', '|', 'bold', 'italic', 'underline', '|', 'list-ol', 'list-ul'],
    // buttons: [
    //   'heading',
    //   '|',
    //   'bold',
    //   'italic',
    //   'underline',
    //   '|',
    //   'list-ol',
    //   'list-ul',
    //   '|',
    //   'align-left',
    //   'align-center',
    //   'align-right',
    //   'align-justify',
    // ],
    headings: ['h1', 'h2', 'h3', 'p'],
  },
  heading: {
    buttons: ['heading', '|', 'bold', 'italic', 'underline'],
    // headings: ['h1', 'h2', 'h3', 'h4'],
    headings: ['h1', 'h2', 'h3', 'p'],
  },
  text: {
    // buttons: ['bold', 'italic', 'underline', '|', 'color'],
    buttons: ['bold', 'italic', 'underline'],
    headings: false,
  },
};
