import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {ProfileScreenStyleProps} from './ProfileScreen.types.ts';

export const ProfileScreenStyles = ({theme}: ProfileScreenStyleProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
      gap: 30,
      backgroundColor: Colors[`${theme}_bgd_default`],
    },
    title: {
      width: '100%',
      fontSize: 24,
      fontWeight: '600',
      color: Colors[`${theme}_on_bgd_srf_1`],
      textAlign: 'center',
    },
    text: {
      width: '100%',
      fontSize: 20,
      fontWeight: '600',
      color: Colors[`${theme}_on_bgd_srf_2`],
      textAlign: 'center',
    },
  });
