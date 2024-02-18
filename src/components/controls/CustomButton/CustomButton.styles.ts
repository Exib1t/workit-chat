import {StyleSheet} from 'react-native';
import {CustomButtonStyleProps} from './CustomButton.types.ts';
import {Colors} from '../../../assetts/colors.ts';

export const CustomButtonStyles = ({
  theme,
  size,
  type,
  disabled,
}: CustomButtonStyleProps) => {
  const backgroundColor = () => {
    switch (type) {
      case 'primary':
        return Colors[`${theme}_primary`];
      case 'secondary':
        return Colors[`${theme}_secondary`];
      case 'text-plain':
        return undefined;
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      opacity: disabled ? 0.6 : 1,
      backgroundColor: backgroundColor(),
      paddingHorizontal: paddingHorizontal(),
      paddingVertical: paddingVertical(),
    },
    text: {
      fontWeight: '600',
      textAlign: 'center',
      fontSize: fontSize(),
      color: Colors[`${theme}_on_bgd_srf_1`],
    },
  });
};
