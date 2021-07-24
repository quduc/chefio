import { CustomBackground } from 'components/CustomBackground';
import { CustomText as Text } from 'components/CustomText';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const SignIn = () => {
    return (
        <CustomBackground>
            <View style={styles.title}>
                <Text h1 text="Welcome Back!" style={{ color: colors.mainText, marginVertical: 10 }} />
                <Text p2 text="Please enter your account here" style={{ color: colors.secondaryText }} />
            </View>
            <View style={styles.form}>

            </View>
        </CustomBackground>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form : {
        marginTop:20,
        marginBottom:60
    }
})