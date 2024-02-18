import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {LoginScreenStylesProps} from './LoginScreen.types.ts';

export const LoginScreenStyles = ({theme}: LoginScreenStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
      gap: 30,
      backgroundColor: Colors[`${theme}_bgd_default`],
    },
    header: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      paddingVertical: 20,
    },
    logo: {
      fontSize: 40,
      fontWeight: '700',
      color: Colors[`${theme}_primary`],
    },
    title: {
      width: '100%',
      fontSize: 24,
      fontWeight: '600',
      color: Colors[`${theme}_on_bgd_srf_1`],
      textAlign: 'center',
    },
    form: {
      width: '100%',
      display: 'flex',
      gap: 40,
      paddingVertical: 40,
      paddingHorizontal: 20,
      backgroundColor: Colors[`${theme}_bgd_variant`],
    },
    form_inputs: {
      width: '100%',
      gap: 15,
    },
  });
