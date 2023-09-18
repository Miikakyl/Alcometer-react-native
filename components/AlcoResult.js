import { View, Text} from "react-native";
import styles from "../styles/alcoResultStyles"

const AlcoResult = ({ result, theme, resultTheme }) => {

    return (
            <View style={[styles.container,theme.background,{borderColor: resultTheme.color}]}>
                <Text style={[styles.resultText, {color: resultTheme.color}]}>{result}</Text>
            </View>

    );
}
 

export default AlcoResult;