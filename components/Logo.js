import { View, Text, Image } from "react-native"
import * as Font from "expo-font"
import { useState, useEffect } from "react"

import styles from '../styles/logoStyles'
import beer from '../assets/images/beer.png'



const Logo = ({ header, theme }) => {

  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Inter': require('../assets/fonts/Inter.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }


  return (

    <View style={[styles.logoContainer, theme.primary]}>
      <Text
        style={[styles.header, { fontFamily: "Inter" }]}>{header}
      </Text>
      <View style={styles.beerContainer}>
        <Image
          style={styles.beer}
          source={beer}
          resizeMode="contain"
        />
        <Image
          style={[styles.beer, {height: 200}]}
          source={beer}
          resizeMode="contain"
        />
        <Image
          style={styles.beer}
          source={beer}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default Logo;