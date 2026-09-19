import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const handleLogin = ()=>{
        if(!email || !password ){
            setError("Please fill in all fields");
            return;
        }
        if (!email.includes('@')){
            setError('Please enter a valid email');
            return;
        }
        setError('');

        console.log('Login successful');
        console.log('Email:', email);
    }
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
            {error ? <Text style={styles.error}>{error}</Text>: null}
            <Button
            title="Login"
            onPress={handleLogin}
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
    error:{
        color: 'red',
        marginBottom: 15,
        textAlign: 'center',
    },
});