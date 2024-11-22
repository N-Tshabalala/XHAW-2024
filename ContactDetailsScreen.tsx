import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const courses = [
  { name: 'First Aid', fee: 1500 },
  { name: 'Sewing', fee: 1500 },
  { name: 'Landscaping', fee: 1500 },
  { name: 'Life Skills', fee: 1500 },
  { name: 'Child Minding', fee: 750 },
  { name: 'Cooking', fee: 750 },
  { name: 'Garden Maintenance', fee: 750 },
];

const ContactDetailsScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<{ name: string; fee: number }[]>([]);
  const [calculatedFee, setCalculatedFee] = useState<number | null>(null);

  const toggleCourseSelection = useCallback((course: { name: string; fee: number }, isChecked: boolean) => {
    setSelectedCourses((prev) =>
      isChecked ? [...prev, course] : prev.filter((c) => c.name !== course.name)
    );
  }, []);

  const handleCalculateFee = useCallback(() => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all contact details');
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert('Error', 'Please select at least one course');
      return;
    }
    const total = selectedCourses.reduce((sum, course) => sum + course.fee, 0);
    const discount = selectedCourses.length === 2
      ? 0.05
      : selectedCourses.length === 3
      ? 0.1
      : selectedCourses.length > 3
      ? 0.15
      : 0;
    const discountedTotal = total * (1 - discount);
    const finalTotal = discountedTotal * 1.15; // Adding 15% VAT
    setCalculatedFee(finalTotal);
    Alert.alert('Quote', `Your total fee (incl. VAT) is R${finalTotal.toFixed(2)}`);
  }, [name, email, phone, selectedCourses]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Text style={styles.subTitle}>Select Courses:</Text>
      {courses.map((course) => (
        <View key={course.name} style={styles.checkboxContainer}>
          <CheckBox
            value={selectedCourses.some((c) => c.name === course.name)}
            onValueChange={(isChecked) => toggleCourseSelection(course, isChecked)}
          />
          <Text style={styles.checkboxLabel}>
            {course.name} - R{course.fee}
          </Text>
        </View>
      ))}
      <Button title="Calculate Total Fees" onPress={handleCalculateFee} />
      {calculatedFee !== null && (
        <Text style={styles.calculatedFee}>
          Quoted Total (incl. VAT): R{calculatedFee.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4, marginBottom: 12 },
  subTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  checkboxLabel: { marginLeft: 8, fontSize: 16 },
  calculatedFee: { marginTop: 16, fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
});

export default ContactDetailsScreen;
