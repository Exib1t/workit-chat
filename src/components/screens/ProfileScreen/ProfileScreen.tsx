import React from 'react';
import {Text, View} from 'react-native';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {ProfileScreenStyles} from './ProfileScreen.styles.ts';
import CustomButton from '../../controls/CustomButton/CustomButton.tsx';
import {useAppDispatch, useAppSelector} from '../../../store';
import {logout} from '../../../store/reducers/auth/authSlice.ts';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const theme = useGetTheme();
  const style = ProfileScreenStyles({theme});
  const {user} = useAppSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Profile</Text>
      <Text style={style.text}>
        {user?.first_name} {user?.last_name}
      </Text>
      <CustomButton
        title={'Logout'}
        type={'secondary'}
        clickHandler={handleLogout}
      />
    </View>
  );
};

export default ProfileScreen;
