import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />
            <Button
            title="Login"
            onPress={() => {
                console.log('Email:', email);
                console.log('Password:', password);
            }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        marginBottom: 15,
        padding: 12,
    },
});