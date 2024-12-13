import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ClassroomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Classroom</Text>
      </View>
      <View style={styles.headerRight}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
          style={styles.profileIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4285F4',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {},
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default ClassroomHeader;