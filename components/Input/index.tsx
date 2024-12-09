import { View, TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";
import { Colors } from "@/constants/Colors";

interface IInputProps {
    placeholder: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
}

const Input = ({ placeholder, secureTextEntry, keyboardType}: IInputProps) => {
  return (
    <View>
        <TextInput 
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholderTextColor={Colors.white}
            style={styles.input}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        borderWidth: 2,
        borderColor: Colors.green,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: Colors.white,
    }
})

export default Input