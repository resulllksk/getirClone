import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Image } from 'react-native';
import DiscountScreen from '../screens/DiscountScreen';
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
const Stack = createStackNavigator();

function HomeNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#dddddd" },
            headerTitleAlign: 'center',
            headerTitle: 'Kaşıkçı Yemek',
          }}
        />
  
        <Stack.Screen
          name="DiscountScreen"
          component={DiscountScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#dddddd" },
            headerTitleAlign: 'center',
            headerTitle: 'İndirimler',
          }}
        />
  
        <Stack.Screen
          name="CategoryFilterScreen"
          component={CategoryFilterScreen}
          options={{
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#dddddd" },
            headerTitleAlign: 'center',
            headerTitle: 'Tatlılar',
          }}
        />
      </Stack.Navigator>
    );
  }
  

export default HomeNavigator;
