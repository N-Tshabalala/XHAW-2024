import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  CourseDetails: { course: string; fee: number; content: string[] };
};

type SixWeekCoursesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CourseDetails'>;
};

const sixWeekCourses = [
  { name: 'Child Minding', fee: 750, content: ['Birth to 6 months', '7 months to 1 year', 'Toddler needs', 'Educational toys'] },
  { name: 'Cooking', fee: 750, content: ['Nutritional requirements', 'Types of protein, carbs, and vegetables', 'Planning meals', 'Cooking meals'] },
  { name: 'Garden Maintenance', fee: 750, content: ['Water restrictions', 'Pruning and propagation', 'Planting techniques'] },
];

const SixWeekCoursesScreen: React.FC<SixWeekCoursesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Week Courses</Text>
      <FlatList
        data={sixWeekCourses}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseButton}
            onPress={() => navigation.navigate('CourseDetails', { course: item.name, fee: item.fee, content: item.content })}
          >
            <Text style={styles.courseText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  courseButton: { padding: 16, backgroundColor: '#007AFF', marginVertical: 8, borderRadius: 8 },
  courseText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default SixWeekCoursesScreen;
