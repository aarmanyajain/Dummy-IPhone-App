import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloScreen from './src/screens/HelloScreen';
import AppearScreen from './src/screens/AppearScreen';
import SetUpScreen from './src/screens/SetUpScreen';
import ModeScreen from './src/screens/ModeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import NoteScreen from './src/screens/NoteScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HelloScreen"
          component={HelloScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AppearScreen"
          component={AppearScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SetUpScreen"
          component={SetUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ModeScreen"
          component={ModeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NoteScreen"
          component={NoteScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
