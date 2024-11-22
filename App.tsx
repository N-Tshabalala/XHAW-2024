import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import SixMonthCoursesScreen from './SixMonthCoursesScreen';
import SixWeekCoursesScreen from './SixWeekCoursesScreen';
import CourseDetailsScreen from './CourseDetailsScreen';
import FeeCalculatorScreen from './FeeCalculatorScreen';
import ContactDetailsScreen from './ContactDetailsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: styles.drawerHeader,
      headerTintColor: '#E15600',
      drawerStyle: styles.drawerStyle,
      drawerActiveTintColor: '#E15600',
      drawerInactiveTintColor: '#FFFFFF',
    }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Six-Month Courses" component={SixMonthCoursesScreen} />
    <Drawer.Screen name="Six-Week Courses" component={SixWeekCoursesScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigation} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="FeeCalculator" component={FeeCalculatorScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#000000',
  },
  drawerStyle: {
    backgroundColor: '#000000',
  },
});
