import React, {FC} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {CustomButtonStyles} from './CustomButton.styles.ts';
import useGetTheme from '../../../helpers/themeHelper.ts';

interface IProps {
  title: string;
  type: 'primary' | 'secondary' | 'text-plain';
  size?: 'sm' | 'md' | 'lg';
  clickHandler?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}

const CustomButton: FC<IProps> = ({
  clickHandler,
  title,
  size = 'md',
  type,
  disabled = false,
}) => {
  const theme = useGetTheme();
  const styles = CustomButtonStyles({theme, size, type, disabled});

  return (
    <TouchableOpacity
      onPress={clickHandler}
      activeOpacity={0.7}
      disabled={disabled}
      style={[styles.container]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
