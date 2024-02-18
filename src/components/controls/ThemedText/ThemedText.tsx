import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import useGetTheme from '../../../helpers/themeHelper.ts';

interface IProps {
  type?: 'body' | 'label' | 'title';
  children: string;
}

const ThemedText: FC<IProps> = ({type = 'body', children}) => {
  const theme = useGetTheme();

  const styles = StyleSheet.create({
    body: {
      fontSize: 14,
      color: Colors[`${theme}_on_bgd_srf_3`],
    },
    label: {
      fontSize: 14,
      color: Colors[`${theme}_on_bgd_srf_3`],
    },
    title: {
      fontSize: 14,
      color: Colors[`${theme}_on_bgd_srf_3`],
    },
  });

  return <Text style={styles[type]}>{children}</Text>;
};

export default ThemedText;
