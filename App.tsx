/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home'
import Workouts from './components/Workouts/Workouts'
import { RootStackParamList } from './routes/RootStackParamList'
import { Text } from 'react-native';

const App = () => {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workouts" component={Workouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
