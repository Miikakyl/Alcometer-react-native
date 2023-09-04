import { Pressable } from 'react-native'
import { View, Text } from 'react-native'
import uuid from 'react-uuid'

import styles from '../styles/genderInputStyles'

const GenderInput = ({ theme, gender, setGender }) => {

    /*Initially selected option is defined in HomeScreen.js and then passed here as prop.
     When a user selects a gender, the component's appearance changes from grey to blue to show it is selected.
     OnPress prop updates the selected gender and triggers a re-render with the updated styles
    */
    const options = [
        {
            value: "Female"
        },
        {
            value: "Male"
        }
    ]
    
    return (
        <View style={styles.genderInputContainer}>
            {options.map((item) => (
                <View style={styles.radioButtonContainer} key={uuid()}>
                    <Pressable
                        key={item.value}
                        style={[ styles.radioButton, item.value === gender? theme.optionSelected: theme.optionUnselected ]}
                        onPress={()=> setGender(item.value)}
                    ></Pressable>
                    <Text style={[ theme.text, item.value === gender? theme.optionSelectedText: theme.optionUnselectedText ]}>{item.value}</Text>
                </View>
            ))
            }
        </View>
    );
}


export default GenderInput;