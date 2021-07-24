import { useNavigation } from '@react-navigation/core';
import { CustomBackground } from 'components/CustomBackground';
import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { CustomText as Text } from 'components/CustomText';
import { colors } from 'constants/colors';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Validate } from './Validate';

export const SignUp = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>('');
    const [pwdCharacterValidate, setPwdCharacterValidate] = useState<boolean>(false);
    const [pwdNumberValidate, setPwdNumberValidate] = useState<boolean>(false);
    const navigation = useNavigation();

    const validatePassword = (text: string) => {
        setPwdCharacterValidate(false);
        setPwdNumberValidate(false);
        setPassword(text);
        if (text.length > 6) {
            setPwdCharacterValidate(true);
        }
        if (text.match("[a-zA-z]{1,}[0-9]{1,}")) {
            setPwdNumberValidate(true);
        }
    }
    return (
        <CustomBackground>
            <View style={styles.title}>
                <Text h1 text="Welcome!" style={{ color: colors.mainText, marginVertical: 10 }} />
                <Text p2 text="Please enter your account here" style={{ color: colors.secondaryText }} />
            </View>
            <View style={styles.form}>
                <CustomInput
                    icon="user"
                    placeholder="Email or phone number"
                    onChangeText={(text: string) => setEmail(text)}
                />
                <CustomInput
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(text: string) => validatePassword(text)}
                />
                {password.length > 0 && (
                    <Validate
                        character={pwdCharacterValidate}
                        number={pwdNumberValidate}
                    />
                )}
                <View style={{ marginTop: 20 }} />
                <CustomButton type="primary" title="Sign Up" />
                <Text p2 text="Have account? Sign In" onPress={() => navigation.navigate("SignIn")} style={{ color: colors.black, marginTop: 10, marginBottom: 60, textAlign: 'center' }} />
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