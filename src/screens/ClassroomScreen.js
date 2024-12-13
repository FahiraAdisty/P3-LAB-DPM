import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import ClassroomHeader from '../components/ClassroomHeader';
import ClassroomCard from '../components/ClassroomCard';
import { Ionicons } from '@expo/vector-icons';

const ClassroomScreen = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = [
          { id: 1, title: '5E - PRAKTIKUM AI', description: 'TUGAS PERTEMUAN 1', teacher: 'Anggie', dueDate: 'Due Today', backgroundColor: '#34A853' },
          { id: 2, title: 'Prak DPM 5E', description: 'MATERI', teacher: 'Ardika', dueDate: 'Due Tomorrow', backgroundColor: '#9B59B6' },
          { id: 3, title: 'Prak KKJ 5E', description: 'ABSENSI PER 2', teacher: 'Ilham', dueDate: 'Due Thursday', backgroundColor: '#FF7F50' },
        ];
        setClasses(data);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch classes.');
      }
    };

    fetchClasses();
  }, []);

  const handleClassPress = (classTitle) => {
    Alert.alert('Class Selected', `You selected ${classTitle}`);
  };

  const handleAddClass = () => {
    Alert.alert('Add Class', 'This feature will allow you to add a new class.');
  };

  return (
    <View style={styles.container}>
      <ClassroomHeader />
      <ScrollView>
        {classes.map((classItem) => (
          <ClassroomCard
            key={classItem.id}
            title={classItem.title}
            description={classItem.description}
            teacher={classItem.teacher}
            dueDate={classItem.dueDate}
            backgroundColor={classItem.backgroundColor}
            onPress={() => handleClassPress(classItem.title)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddClass}>
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4285F4',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default ClassroomScreen;