import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ClassroomScreen from './src/screens/ClassroomScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#4285F4" />
      <ClassroomScreen />
    </SafeAreaView>
  );
};

export default App;