import { useState, useContext, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { ThemeContext } from "../App";

import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Component imports
import ThemeSwitch from "../components/ThemeSwitch";
import Button from '../components/Button';
import Logo from '../components/Logo';
import AlcoResult from "../components/AlcoResult";
import ResultTextArea from "../components/ResultTextArea";

// Styles
import { lightThemeStyles, darkThemeStyles } from '../styles/themes';
import styles from '../styles/screenStyles';

const ResultScreen = ({ navigation, route }) => {

  const resultOptions = {
    sober : {
      text: ["You can safetly drive,","because you're not drunk at all!"],
      color: "#33FFB0",
    },

    mildly : {
      text: ["According to finnish law you","can drive, but you are not sober!"],
      color: "#FFAE33",
    },
    drunk : {
      text: ["Don't drive, you have drank!"],
      color: "#FF4833",
    },
  }

  /* When the value of theme is changed in App.js, the themes variable toggles corresponding style name here*/
  const [theme, setTheme] = useContext(ThemeContext)
  const [resultTheme, setResultTheme] = useState({})
  const themes = theme === 'light' ? lightThemeStyles : darkThemeStyles;


  const navigate = () => {
    navigation.navigate("home")
  }

  /*After the first render, useEffect is invoked to assign color and text, that suits the result */
  useEffect(() => {
      if(route.params <= 0.0)
        setResultTheme(resultOptions.sober)
      else if(route.params <= 0.5)
        setResultTheme(resultOptions.mildly)
      else
        setResultTheme(resultOptions.drunk)
  }, [])


  return (

    <SafeAreaView style={themes.background}>
      <ScrollView contentContainerStyle={[styles.container, themes.background]}>
        <ThemeSwitch />
        <Logo header="Result" theme={themes} />
        <AlcoResult result={route.params} theme={themes} resultTheme={resultTheme} />
        <ResultTextArea theme={themes} resultText={resultTheme.text}/>
        <Button callback={navigate} buttonText={"Calculate again"} theme={themes} />
        <StatusBar />
      </ScrollView>
    </SafeAreaView>

  );
}
export default ResultScreen;