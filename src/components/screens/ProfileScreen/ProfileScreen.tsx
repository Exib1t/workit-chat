import React from 'react';
import {Text, View} from 'react-native';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {ProfileScreenStyles} from './ProfileScreen.styles.ts';
import CustomButton from '../../controls/CustomButton/CustomButton.tsx';
import {useAppDispatch} from '../../../store';
import {logout} from '../../../store/reducers/auth/authSlice.ts';

const ProfileScreen = () => {
  const theme = useGetTheme();
  const style = ProfileScreenStyles({theme});
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Profile</Text>
      <CustomButton
        title={'Logout'}
        type={'secondary'}
        clickHandler={handleLogout}
      />
    </View>
  );
};

export default ProfileScreen;
