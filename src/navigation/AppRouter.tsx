import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/screens/LoginScreen/LoginScreen.tsx';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils.ts';
import {ROUTES} from './routes.ts';
import {Colors} from '../assetts/colors.ts';
import useGetTheme from '../helpers/themeHelper.ts';
import {useAppDispatch, useAppSelector} from '../store';
import ProfileScreen from '../components/screens/ProfileScreen/ProfileScreen.tsx';
import {refreshThunk} from '../store/reducers/auth/authThunks.ts';

const Stack = createStackNavigator();

const AppRouter = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useGetTheme();
  const dispatch = useAppDispatch();

  const {isLoading, token, isAuthenticated} = useAppSelector(
    state => state.auth,
  );

  useEffect(() => {
    if (token) {
      dispatch(refreshThunk({token}));
    }
  }, [dispatch, token]);

  const renderNonAuthenticatedRoutes = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={ROUTES.signIn} component={LoginScreen} />
      </Stack.Group>
    );
  };

  const renderAuthenticatedRoutes = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={ROUTES.profile} component={ProfileScreen} />
      </Stack.Group>
    );
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container_${theme}`]]}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          barStyle={isDarkMode ? 'dark-content' : 'light-content'}
          backgroundColor={Colors[`${theme}_bgd_default`]}
        />
        {isLoading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 40, color: 'white'}}>Loading</Text>
          </View>
        ) : (
          <Stack.Navigator
            initialRouteName={token ? ROUTES.profile : ROUTES.signIn}
            screenOptions={{headerShown: false}}>
            {isAuthenticated
              ? renderAuthenticatedRoutes()
              : renderNonAuthenticatedRoutes()}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_dark: {
    flex: 1,
    backgroundColor: Colors.dark_bgd_default,
  },
  container_light: {
    flex: 1,
    backgroundColor: Colors.light_bgd_default,
  },
});

export default AppRouter;
