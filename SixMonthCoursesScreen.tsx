import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const sixMonthCourses = [
  { name: 'First Aid', details: ' Purpose: To provide first aid awareness and basic life support Content: Wounds and bleeding Burns and fractures ,Emergency scene management ,Cardio-Pulmonary Resuscitation ,Respiratory distress e.g., Choking, blocked airway', fee: 1500 },
  { name: 'Sewing', details: 'To provide alterations and new garment tailoring services', fee: 1500 },
  { name: 'Landscaping', details: 'To provide landscaping services for new and established gardens', fee: 1500 },
  { name: 'Life Skills', details: 'To provide skills to navigate basic life necessities', fee: 1500 },
];

const SixMonthCoursesScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Courses</Text>
      {sixMonthCourses.map((course) => (
        <View key={course.name} style={styles.courseItem}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseFee}>Fee: R{course.fee}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('CourseDetails', { course })}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  courseItem: { marginBottom: 16, padding: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 4 },
  courseName: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  courseFee: { fontSize: 16, marginBottom: 8 },
});

export default SixMonthCoursesScreen;
