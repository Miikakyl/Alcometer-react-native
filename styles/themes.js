import { StyleSheet } from 'react-native';

export const lightThemeStyles = StyleSheet.create({

    primary: {
        backgroundColor: "#1080E7"
    }
    ,
    secondary: {
        backgroundColor: "#EBEBEB"
    },
    text: {
        color: '#000000'
    },
    background: {
        backgroundColor: "#FAFAFA"
    },
    optionSelected: {
        backgroundColor: "#1080E7"
    },
    optionSelectedText: {
        color: "#1080E7"
    },
    optionUnselected: {
        backgroundColor: "#EBEBEB"
    },
    optionUnselectedText: {
        color: "#EBEBEB"
    }
});

export const darkThemeStyles = StyleSheet.create({

    primary: {
        backgroundColor: "#98B6F3"
    },
    secondary: {
        backgroundColor: "#282828"
    }
    ,
    text: {
        color: '#FFFFFF',
    },
    background: {
        backgroundColor: "#121212"
    }
    ,
    optionSelected: {
        backgroundColor: "#98B6F3"
    },
    optionSelectedText: {
        color: "#98B6F3"
    },
    optionUnselected: {
        backgroundColor: "#282828"
    },
    optionUnselectedText: {
        color: "#282828"
    }
})