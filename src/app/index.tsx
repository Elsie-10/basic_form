import { Text, View, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
// The fuction creates screen for the home page of the app. It returns a View component that contains a Text component with a welcome message.
export default function HomeScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN APP</Text>
      <Text style={styles.subtitle}>Welcome to my app</Text>

      <Button 
       title='Get Started'
       onPress={() => router.push('/dashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
});