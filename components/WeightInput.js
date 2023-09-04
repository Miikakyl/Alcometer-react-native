import { Text, TextInput, View } from 'react-native'
import styles from '../styles/weightInputStyles.js'


const WeightInput = ({ theme, weight, setWeight, errorMsg }) => {

    /*While the user is typing in the input, TextInputs OnChangeText is updating the state of weight, that is located in HomeScreen.js.
    In HomeScreen.js in calculating function the value is checked when pressing the calculate button. Wheter it is lower than zero, NaN or empty,
    the Error state is updated to true and then re-rendered here to show error message.
    */

    return (
        <View style={styles.weightInputContainer}>
            <Text style={[styles.weightLabel, theme.text]}>Weight</Text>
            <TextInput
                value={weight}
                onChangeText={value => setWeight(value)}
                keyboardType='numeric'
                style={[styles.weightInput, theme.secondary, theme.text]}
                returnKeyType='done'
            >
            </TextInput>
            {errorMsg === true 
                ?<Text style={{ color: 'red' }}>Please enter a value</Text>
                : null
            }
        </View>
    );
}

export default WeightInput;