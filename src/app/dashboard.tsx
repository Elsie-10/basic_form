import {View, Text, Button, StyleSheet} from 'react-native';
import { router } from 'expo-router';

export default function Dashboard(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Button
            title="Login"
            onPress={() => router.push('/login')}
            />
            <Button
            title="Sign Up"
            onPress={() => router.push('/signup')}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});