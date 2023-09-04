import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/buttonStyles.js"

const Button = ({ callback, buttonText, theme }) => {

    return (
        <TouchableOpacity style={[styles.button,styles,theme.primary]} onPress={callback}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

export default Button;