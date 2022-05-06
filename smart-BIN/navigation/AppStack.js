import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import menu from '../screens/menu';
import SupportersScreen from '../screens/SupportersScreen';
import Map from '../screens/Map';
import Info from '../screens/info';
import Add from '../screens/AddImage';
import Prog from '../screens/CircularProgress';
import tut from '../screens/TutorialScreen';
import profil from '../screens/profile';
import Expo from '../screens/expo';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Home" component={Prog} />
      <Stack.Screen name="Thanks for the support!" component={SupportersScreen} />
      <Stack.Screen name="Where you can find us" component={Map} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Planet Budapest" component={Expo} />
      <Stack.Screen name="profile" component={profil} />
      <Stack.Screen options={{headerShown: false}}
 name="Add" component={Add} />
      <Stack.Screen options={{headerShown: false}}
 name="tut" component={tut} />
    </Stack.Navigator>
  );
}
