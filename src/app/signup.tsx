import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { router } from 'expo-router';
import { useState } from 'react';

import AppInput from '@/components/AppInput';
import { Colors, Radius, Spacing } from '@/constants/theme';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    console.log('Signup successful');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.topShape} />

      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.illustrationCard}>
          <Image
            source={require('@/assets/images/signup.jpg')}
            style={styles.illustration}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Enter your personal details
        </Text>

        <View style={styles.form}>

          <AppInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

          <AppInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />

          <AppInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <AppInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {error ? (
            <Text style={styles.error}>
              {error}
            </Text>
          ) : null}

          <Pressable
            style={styles.button}
            onPress={handleSignup}
          >
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </Pressable>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>

            <Pressable
              onPress={() => router.push('/login')}
            >
              <Text style={styles.link}>
                Login
              </Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  topShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: Colors.light.primaryLight,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  backText: {
    fontSize: 32,
    color: Colors.light.text,
    marginTop: -4,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: 80,
    paddingBottom: Spacing.five,
    justifyContent: 'center',
  },

  illustrationCard: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  illustration: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: Colors.light.text,
    textAlign: 'center',
    marginTop: Spacing.two,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginTop: Spacing.one,
  },

  form: {
    marginTop: Spacing.three,
    gap: Spacing.two,
  },

  button: {
    height: 55,
    backgroundColor: Colors.light.primary,
    borderRadius: Radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.one,
  },

  buttonText: {
    color: Colors.light.textLight,
    fontSize: 16,
    fontWeight: '700',
  },

  error: {
    color: Colors.light.error,
    fontSize: 13,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: Spacing.two,
  },

  footerText: {
    color: Colors.light.textSecondary,
    fontSize: 13,
  },

  link: {
    color: Colors.light.primaryDark,
    fontWeight: '700',
    fontSize: 13,
  },
});