import {ThemeType} from '../../../models/global.types.ts';

export interface CustomInputStyleProps {
  theme: ThemeType;
  size: 'sm' | 'md' | 'lg';
  type: 'on-bgd' | 'on-srf';
  disabled: boolean;
}
