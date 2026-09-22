import '@/global.css';
import { Platform } from 'react-native';

export const Colors = {
  light: {
    primary: '#0AA79D',
    primaryDark: '#078C84',
    primaryLight: '#BFEFEA',

    background: '#F4FFFE',
    backgroundElement: '#FFFFFF',
    backgroundSoft: '#E7F9F7',

    text: '#164E4A',
    textSecondary: '#6C8582',
    textLight: '#FFFFFF',

    border: '#B9E4E0',

    error: '#D9534F',

    shadow: '#164E4A',
  },

  dark: {
    primary: '#35C5BB',
    primaryDark: '#0AA79D',
    primaryLight: '#164E4A',

    background: '#062F2C',
    backgroundElement: '#0B4541',
    backgroundSoft: '#105752',

    text: '#FFFFFF',
    textSecondary: '#B8D4D1',
    textLight: '#FFFFFF',

    border: '#397A75',

    error: '#FF7772',

    shadow: '#000000',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light &
  keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 10,
  medium: 16,
  large: 28,
  round: 999,
} as const;

export const Shadows = {
  card: {
    shadowColor: '#164E4A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
  },
};

export const BottomTabInset =
  Platform.select({ ios: 50, android: 80 }) ?? 0;

export const MaxContentWidth = 800;