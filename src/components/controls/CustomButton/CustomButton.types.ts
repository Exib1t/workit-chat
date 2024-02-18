import {ThemeType} from '../../../models/global.types.ts';

export interface CustomButtonStyleProps {
  theme: ThemeType;
  size: 'sm' | 'md' | 'lg';
  type: 'primary' | 'secondary' | 'text-plain';
  disabled: boolean;
}
