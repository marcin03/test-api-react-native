import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotosListScreen from './src/screens/PhotosListScreen';
import PhotoDetailsScreen from './src/screens/PhotoDetailsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhotosListScreen"
          component={PhotosListScreen}
          options={{ title: 'Photos List' }}
        />
        <Stack.Screen 
          name="PhotoDetailsScreen" 
          component={PhotoDetailsScreen} 
          options={{ title: 'Photo Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
