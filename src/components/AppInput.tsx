import { TextInput, StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Spacing,
} from '@/constants/theme';

type AppInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function AppInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: AppInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.light.textSecondary}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 52,

    backgroundColor: Colors.light.backgroundElement,

    borderWidth: 1,
    borderColor: Colors.light.border,

    borderRadius: Radius.medium,

    paddingHorizontal: Spacing.three,

    fontSize: 14,
    color: Colors.light.text,

    marginBottom: Spacing.two,
  },
});