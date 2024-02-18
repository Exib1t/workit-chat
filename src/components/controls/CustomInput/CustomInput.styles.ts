import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {CustomInputStyleProps} from './CustomInput.types.ts';

export const CustomInputStyles = ({
  theme,
  type,
  size,
  disabled,
}: CustomInputStyleProps) => {
  const backgroundColor = () => {
    switch (type) {
      case 'on-bgd':
        return Colors[`${theme}_bgd_variant`];
      case 'on-srf':
        return Colors[`${theme}_srf_variant`];
    }
  };

  const paddingHorizontal = () => {
    switch (size) {
      case 'sm':
        return 6;
      case 'md':
        return 8;
      case 'lg':
        return 10;
    }
  };

  const paddingVertical = () => {
    switch (size) {
      case 'sm':
        return 4;
      case 'md':
        return 6;
      case 'lg':
        return 8;
    }
  };

  const fontSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'md':
        return 20;
      case 'lg':
        return 24;
    }
  };

  return StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 4,
      opacity: disabled ? 0.6 : 1,
      backgroundColor: backgroundColor(),
      paddingHorizontal: paddingHorizontal(),
      paddingVertical: paddingVertical(),
      borderColor: Colors[`${theme}_on_bgd_srf_5`],
      borderWidth: 1,
      fontSize: fontSize(),
      fontWeight: '400',
      color: Colors[`${theme}_on_bgd_srf_1`],
    },
  });
};
