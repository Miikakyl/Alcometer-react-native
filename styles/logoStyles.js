import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 130,
    borderWidth: 0,
    borderRadius: 20,
    marginBottom: 25
    
  },
  header: {
    zIndex: 3,
    color: "#FAFAFA",
    fontSize: 50,
    textShadowColor: "#1080E7",
    textShadowRadius: 15
  },
  beer: {
    zIndex: 2,
    position: "absolute",
  }
});