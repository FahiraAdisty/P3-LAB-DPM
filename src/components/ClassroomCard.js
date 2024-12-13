import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ClassroomCard = ({ title, description, teacher, dueDate, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, { backgroundColor }]}>  
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png' }}
          style={styles.cardIcon}
        />
      </View>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.teacherName}>{teacher}</Text>
        <Text style={styles.dueDate}>{dueDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardIcon: {
    width: 20,
    height: 20,
  },
  cardDescription: {
    fontSize: 14,
    color: '#E5E5E5',
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  teacherName: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  dueDate: {
    fontSize: 12,
    color: '#D1D5DB',
  },
});

export default ClassroomCard;