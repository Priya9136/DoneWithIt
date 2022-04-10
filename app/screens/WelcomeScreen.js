import React from 'react';
import { Image, ImageBackground, StyleSheet,Text,View} from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
        <Image style={styles.logo}
        source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
        <AppButton title="Login"></AppButton>
        <AppButton title="Register" color='secondary'/>
        </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    tagline: {
        fontSize :25,
        fontWeight: "600",
        paddingVertical: 20

    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    },
    logo: {
        height:100,
        width: 100,
    },
    logoContainer:{
        top: 70,
        position: "absolute",
        alignItems: "center"
    }
})
export default WelcomeScreen;