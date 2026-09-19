import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../constants/theme';

type AppButtonProps = {
    title: string;
    onPress: () => void;
};

export default function AppButton({ 
    title, onPress
}: AppButtonProps) {
    return (
        <Pressable 
            style={styles.button}
            onPress={onPress}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.primary,
        paddingVertical: Spacing.three,
        borderRadius: Radius.round,
        alignItems: 'center',
    },
    text: {
        color: Colors.light.white,
        fontSize: 16,
        fontWeight: '600',
    },
});
