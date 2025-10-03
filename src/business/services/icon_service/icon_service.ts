import { FontAwesomeIcons, FontAwesomeIconStyles } from '@business/constants/icons';

export function itemItems() {
  return FontAwesomeIconStyles.map(style => {
    return {
      key: style,
      value: style,
      text: style,
      title: style,
      children: FontAwesomeIcons.map(icon => ({
        key: `fa-${style} fa-${icon}`,
        value: `fa-${style} fa-${icon}`,
        text: `${style} ${icon}`,
        title: icon,
        children: [],
      })),
    };
  });
}
