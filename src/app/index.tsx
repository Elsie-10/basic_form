import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

import { router } from 'expo-router';
import { useEffect, useRef } from 'react';

import { Colors, Radius, Spacing } from '@/constants/theme';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* Decorative background */}
      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />
      <View style={styles.circleThree} />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.smallText}>
          SMALL STEPS
        </Text>

        <Text style={styles.title}>
          Big Dreams
        </Text>

        <Text style={styles.subtitle}>
          Your goals. Our support.
        </Text>

        {/* Mascot Wrapper */}
        <View style={styles.mascotContainer}>
          <Image
            source={require('@/assets/images/mascot.jpg')}
            style={styles.mascot}
            resizeMode="cover"
          />
        </View>
      </Animated.View>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Pressable
          style={styles.button}
          onPress={() => router.push('/dashboard')}
        >
          <Text style={styles.buttonText}>
            Get Started
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </Pressable>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.six,
    paddingBottom: Spacing.five,
    justify: 'space-between',
    overflow: 'hidden',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  smallText: {
    color: Colors.light.textLight,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },

  title: {
    color: Colors.light.textLight,
    fontSize: 42,
    fontWeight: '800',
    marginTop: -4,
  },

  subtitle: {
    color: Colors.light.textLight,
    fontSize: 15,
    marginTop: Spacing.two,
    opacity: 0.9,
  },

  /* New styles for image integration */
  mascotContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    overflow: 'hidden',
    marginTop: Spacing.four,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  mascot: {
    width: '100%',
    height: '100%',
  },

  button: {
    height: 62,
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: Radius.round,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    elevation: 5,
  },

  buttonText: {
    color: Colors.light.primaryDark,
    fontSize: 17,
    fontWeight: '700',
  },

  arrow: {
    position: 'absolute',
    right: 24,
    fontSize: 24,
    color: Colors.light.primaryDark,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.three,
    gap: 7,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },

  activeDot: {
    width: 20,
    backgroundColor: '#FFFFFF',
  },

  circleOne: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 200,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: -100,
    right: -80,
  },

  circleTwo: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 200,
    backgroundColor: 'rgba(255,255,255,0.08)',
    bottom: -60,
    left: -70,
  },

  circleThree: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.12)',
    top: 180,
    right: 20,
  },
});