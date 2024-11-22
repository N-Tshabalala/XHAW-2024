import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailsScreen: React.FC<any> = ({ route }: any) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.details}>{course.details}</Text>
      <Text style={styles.details}>Fee: R{course.fee}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' },
  title: { fontSize: 24, color: '#E15600' },
  details: { fontSize: 18, color: '#FFFFFF' },
});

export default CourseDetailsScreen;
