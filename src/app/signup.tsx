import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function SignUp(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError] = useState('');

    const handleSignUp = ()=>{
        if(!username || !email || !password ){
            setError("Please fill in all fields");
            return;
        }
        if (!email.includes('@')){
            setError('Please enter a valid email');
            return;
        }
        if (password.length < 6){
            setError('Password must be at least 6 characters');
            return;
        }
        if(password !== confirmPassword){
            setError('Passwords do not match');
            return;
        }

        setError('');

        console.log('Signup successful');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            />
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
            <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            />
            {error ? <Text style={styles.error}> </Text>: null}
            <Button
            title="Sign Up"
            onPress={handleSignUp}
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