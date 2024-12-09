import { Colors } from "@/constants/Colors";
import { View, Pressable, StyleSheet, Text } from "react-native";

interface IButtonProps {
    text: string;
}

const Button = ({ text }: IButtonProps) => {
  return (
    <View>
        <Pressable style={styles.button}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        backgroundColor: Colors.green,
        padding: 10,
        borderRadius: 10
    },
    text: {
        textAlign: "center",
        color: Colors.black,
        fontWeight: "bold"
    }
})

export default Button