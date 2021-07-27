import { CustomButton } from 'components/CustomButton';
import { CustomText } from 'components/CustomText';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React, { FC } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
interface Props {
    showSuccessful: boolean;
    onPress?: () => void;
    onRequestClose?: () => void;
}
export const UploadSuccessful: FC<Props> = ({ showSuccessful, onPress, onRequestClose }) => {
    return (
        <Modal
            visible={showSuccessful}
            animationType='fade'
            transparent
            onRequestClose={onRequestClose}
        >
            <View style={styles.container}>
                <View style={styles.centerView}>
                    <Image
                        source={require('../../resources/images/successful.png')}
                        style={{ width: 160, height: 160 }}
                        resizeMode="contain"
                    />
                    <CustomText h1 text="Upload Success" style={{ color: colors.title, marginVertical: 10 }} />
                    <CustomText p2 text="Your recipe has been uploaded," style={{ color: colors.mainText }} />
                    <CustomText p2 text="you can see it on your profile" style={{ color: colors.mainText }} />
                    <View style={{ width: constants.widthDevice - 80 }}>
                        <CustomButton title="Back to Home" onPress={onPress} type="primary" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000070',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
        height: 458,
        width: constants.widthDevice - 40,
        borderRadius: 12,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
})