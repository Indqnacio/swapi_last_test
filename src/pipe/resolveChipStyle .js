import { realTextToColor } from './realTextColor';
import { realColor } from './textToColor.JS';

export function resolveChipStyle(value, col) {
  switch (col.chipMode) {
    case 'hash':
      return realColor(value);

    case 'real':
      return realTextToColor(value);

    case 'fixed':
      return col.chipColor || {};

    case 'none':
    default:
      return {};
  }
}
