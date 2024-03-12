import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from './screens/Home';
import theme from './styles/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={theme.colors.primary[500]} translucent={false} />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
