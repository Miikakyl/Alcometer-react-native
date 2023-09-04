import { View, Text } from "react-native";
import { useEffect, useState } from 'react'
import uuid from 'react-uuid';

import styles from '../styles/resultTextAreaStyles'

const ResultTextArea = ({ theme, resultText }) => {
    const [text, setText] = useState([])

    useEffect(() => {
        if (Array.isArray(resultText)) {
            setText(resultText)
        }
    }, [resultText])
    
    return (
        <View style={[styles.resultTextContainer,theme.secondary]}>
                {text.map((text) => (
                    <Text 
                        style={theme.text}
                        key={uuid()}
                        >{text}
                    </Text>
                ))
                }
        </View>
    );
}
 
export default ResultTextArea;