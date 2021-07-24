import { CustomBackground } from 'components/CustomBackground';
import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
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
                <CustomInput
                    icon="user"
                    placeholder="Email or phone number"
                />
                <CustomInput
                    icon="lock"
                    placeholder="Password"
                />
                <Text p2 text="Forgot password?" style={{ color: colors.mainText, marginTop: 10, marginBottom: 60, textAlign: 'right' }} />
                <CustomButton type="primary" title="Login" />
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
    form: {
        marginTop: 20,
        marginBottom: 60
    }
})