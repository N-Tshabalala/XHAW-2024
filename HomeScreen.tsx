import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require('./ETN Website.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.description}>
        Empowering the Nation provides various courses to uplift and skill individuals for a better future.
      </Text>
      <Button
        title="Six-Month Courses"
        onPress={() => navigation.navigate('SixMonthCourses')}
      />
      <Button
        title="Six-Week Courses"
        onPress={() => navigation.navigate('SixWeekCourses')}
      />
      <Button
        title="Calculate Fees"
        onPress={() => navigation.navigate('FeeCalculator')}
      />
      <Button
        title="Contact Details"
        onPress={() => navigation.navigate('ContactDetails')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Background color
  },
  logo: {
    width: 150, // Width of the logo
    height: 150, // Height of the logo
    marginBottom: 20, // Spacing below the logo
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Text color
  },
});

export default HomeScreen;
