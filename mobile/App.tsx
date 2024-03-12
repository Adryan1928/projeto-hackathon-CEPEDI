import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home';
import { LoginScreen } from './screens/login';
import { RegisterScreen } from './screens/register';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegisterScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
