import { View, Text} from "react-native";
import styles from "../styles/alcoResultStyles"

const AlcoResult = ({ result, theme, resultTheme }) => {

    return (
        <View style={[styles.outerRound,{backgroundColor: resultTheme.color}]}>
            <View style={[styles.innerRound,theme.background]}>
                <Text style={[styles.resultText, {color: resultTheme.color}]}>{result}</Text>
            </View>
        </View>
    );
}
 

export default AlcoResult;