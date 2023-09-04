import { TouchableOpacity, View, Text } from "react-native";
import styles from '../styles/numberInputStyles'

import { AntDesign } from '@expo/vector-icons';



const NumberInput = ({ inputName, theme, value, setValue}) => {

    const increase = () => {
        setValue(value < 0? value - 1: 0)
    }
    const decrease = () => {
        setValue(value + 1)
    }
    
    return (
        <View style={styles.numberInputContainer}>
            <Text style={[styles.numberInputLabel, theme.text]}>{inputName}</Text>
            <View style={[styles.numberInputButtonContainer, theme.secondary]}>
                <TouchableOpacity 
                    style={[styles.numberButtonLeft, theme.primary]}
                    onPress={() => increase()}
                >
                    <AntDesign name="minus" size={30} color="white" />
                </TouchableOpacity>
                <Text style={[styles.numberIndicator, theme.text]}>{value}</Text>
                <TouchableOpacity 
                    style={[styles.numberButtonRight, theme.primary]}
                    onPress={() => decrease()}
                >
                    <AntDesign name="plus" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default NumberInput;