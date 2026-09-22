import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

import { router } from 'expo-router';

import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>

      {/* Decorative background shape */}
      <View style={styles.topShape} />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Hero Banner Graphic */}
        <View style={styles.illustrationCard}>
          <Image
            source={require('@/assets/images/welcome.jpg')}
            style={styles.illustration}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.subtitle}>
          Find the things that you love.
        </Text>

        <View style={styles.card}>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.primaryButtonText}>
              Sign Up
            </Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.secondaryButtonText}>
              Login
            </Text>
          </Pressable>

        </View>

      </ScrollView>
    </View>
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

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: 50,
    paddingBottom: Spacing.five,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  illustrationCard: {
    width: '92%',
    height: 200,
    borderRadius: Radius.medium ?? 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },

  illustration: {
    width: '100%',
    height: '100%',
  },

  subtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    marginVertical: Spacing.two,
  },

  card: {
    width: '100%',
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: Radius.large,
    padding: Spacing.three,
    ...Shadows.card,
  },

  primaryButton: {
    height: 56,
    backgroundColor: Colors.light.primary,
    borderRadius: Radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    color: Colors.light.textLight,
    fontSize: 16,
    fontWeight: '700',
  },

  secondaryButton: {
    height: 56,
    borderWidth: 1.5,
    borderColor: Colors.light.primary,
    borderRadius: Radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.two,
  },

  secondaryButtonText: {
    color: Colors.light.primaryDark,
    fontSize: 16,
    fontWeight: '700',
  },
});