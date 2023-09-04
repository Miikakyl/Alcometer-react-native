import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import HomeScreen from './screens/HomeScreen'
import ResultScreen from './screens/ResultScreen'

export const ThemeContext = React.createContext()
const Stack = createNativeStackNavigator();

const App = () => {

  const [theme, setTheme] = useState("light")
  
  /*This function is called in ThemeSwitch.js to change theme state to
  update themes in child components. It takes boolean argument.  */
  const changeTheme = (value) => {
    setTheme(() => value === false ? "dark" : "light")
  }

  return (

    <ThemeContext.Provider value={[theme,changeTheme]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="result" component={ResultScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
