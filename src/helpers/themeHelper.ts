import {useColorScheme} from 'react-native';

export default function useGetTheme(): 'dark' | 'light' {
  const theme = useColorScheme();

  return theme === 'dark' ? 'dark' : 'light';
}
