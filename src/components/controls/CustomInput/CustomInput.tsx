import React, {FC} from 'react';

import {TextInput, TextInputProps} from 'react-native';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {CustomInputStyles} from './CustomInput.styles.ts';
import {Colors} from '../../../assetts/colors.ts';

interface IProps extends TextInputProps {
  type: 'on-bgd' | 'on-srf';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const CustomInput: FC<IProps> = ({
  disabled = false,
  size = 'md',
  type,
  ...props
}) => {
  const theme = useGetTheme();
  const styles = CustomInputStyles({disabled, size, theme, type});

  return (
    <TextInput
      {...props}
      style={styles.container}
      placeholderTextColor={Colors[`${theme}_on_bgd_srf_4`]}
    />
  );
};

export default CustomInput;
