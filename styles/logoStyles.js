import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    position: "relative",
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
  beerContainer: {
    zIndex: 2,
    position: "absolute",
    bottom: -5,
    flexDirection: "row",
    gap: -50,
    alignItems: 'flex-end'
  },
  beer: {
    height: 180, 
    width: 100,
  }
});