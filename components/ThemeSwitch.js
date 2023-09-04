import { View } from "react-native";
import SwitchWithIcons from "react-native-switch-with-icons";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";

import styles from '../styles/themeSwitchStyles'
import moonIcon from '../assets/images/moon.png'
import sunIcon from '../assets/images/sun.png'


const ThemeSwitch = () => {
     /*When themeOn toggles between values light and dark, useEffect is fired to
    change the state of switch, otherwise the switch shows wrong position when changing
    screen. */


    const [themeOn,setThemeOn] = useContext(ThemeContext)
    const [switchOn,setSwitchOn] = useState()

    const changeTheme = () => {
        setSwitchOn((curr) => curr === false? true : false)
        setThemeOn(switchOn)
    }
    
    useEffect(() => {
        setSwitchOn(() => themeOn === "light"? false : true)
    }, [themeOn])
    
    return (
        <View style={styles.themeSwitchContainer}>
             <SwitchWithIcons
                style={styles.themeSwitch}
                value={switchOn}
                onValueChange={() => changeTheme()}
                icon={{true: moonIcon, false:sunIcon}}
                iconColor={{true:"#DBFF00",false:"#DBFF00"}}
                trackColor={{true:"#282828",false:"#EBEBEB"}}
                thumbColor={{true:"#98B6F3",false:"#1080E7"}}
            />
        </View>
    );
}
 
export default ThemeSwitch;