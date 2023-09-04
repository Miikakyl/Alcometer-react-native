import { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { ThemeContext } from "../App";

import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Component imports
import WeightInput from '../components/WeightInput';
import NumberInput from '../components/NumberInput';
import GenderInput from '../components/GenderInput';
import Logo from '../components/Logo';
import ThemeSwitch from '../components/ThemeSwitch';
import CalculateBtn from '../components/Button';

// Styles
import { lightThemeStyles, darkThemeStyles } from '../styles/themes';
import styles from '../styles/screenStyles'

const HomeScreen = ({ navigation }) => {

    //Input states that are passed as props to child components
    const [weight, setWeight] = useState("")
    const [error, setError] = useState(false)
    const [bottles, setBottles] = useState(0)
    const [hours, setHours] = useState(0)
    const [gender, setGender] = useState("Female")

    /* When the value of theme is changed in App.js, the themes variable toggles corresponding style name here*/
    const [theme, setTheme] = useContext(ThemeContext)
    const themes = theme === 'light' ? lightThemeStyles : darkThemeStyles;

    /*Alcohol blood level calculation is done here and then passed to ResultScreen.js. Also the weight input is checked here*/
    const calcAndNavigate = () => {

        if (Number(weight) <= 0 || isNaN(weight)) {
            setError(true);
        }    
        else {
            setWeight(Number(weight))
            let calculation = 0
            const litres = bottles * 0.33
            const grams = litres * 8 * 4.5
            const burning = weight / 10
            const gramsLeft = grams - burning * hours
            
            calculation = (gender === "female" ? gramsLeft / (weight * 0.6) : gramsLeft / (weight * 0.7)).toFixed(2)

            clearValues()
            //If the calculations result negative number, it will be changed as 0
            navigation.navigate("result", calculation >= 0 ? calculation : 0)
        }

    }
    const clearValues = () => {
        setWeight("")
        setBottles(0)
        setHours(0)
        setError(false)
        setGender("Female")
    }

    return (
        <SafeAreaView style={themes.background}>
            <ScrollView contentContainerStyle={[styles.container, themes.background]}>
                <ThemeSwitch />
                <Logo header={"Alcometer"} theme={themes} />
                <WeightInput weight={weight} setWeight={setWeight} theme={themes} errorMsg={error} />
                <NumberInput inputName={"Bottles"} value={bottles} setValue={setBottles} theme={themes} />
                <NumberInput inputName={"Hours"} value={hours} setValue={setHours} theme={themes} />
                <GenderInput theme={themes} gender={gender} setGender={setGender} />
                <CalculateBtn callback={calcAndNavigate} buttonText={"Calculate"} theme={themes} />
                <StatusBar />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;