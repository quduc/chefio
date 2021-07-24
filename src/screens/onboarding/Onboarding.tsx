import { useNavigation } from '@react-navigation/core';
import { CustomButton } from 'components/CustomButton';
import { CustomText as Text } from 'components/CustomText';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
export const Onboarding = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageTop}>
                <FastImage
                    style={{
                        width: constants.widthDevice,
                        height: constants.heightDevice * 0.6
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                    source={require('../../resources/images/onboarding.png')}
                />
            </View>
            <View style={styles.main}>
                <Text h1 text="Start Cooking" style={{ color: colors.mainText }} />
                <Text p1 text={`Let’s join our community`} style={{ marginVertical: 5, color: colors.secondaryText, textAlign: 'center' }} />
                <Text p1 text={`to cook better food!`} style={{ marginBottom: 40, color: colors.secondaryText, textAlign: 'center' }} />
                <CustomButton type="primary" title="Get started" onPress={() => navigation.navigate("SignIn")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    imageTop: {
        width: constants.widthDevice,
        height: constants.heightDevice * 0.6
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    }
})