import { CustomButton } from 'components/CustomButton';
import { CustomText } from 'components/CustomText';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
interface Props {
    noti: any;
}
export const Follow: FC<Props> = ({ noti }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={{ uri: noti.user_image }}
                    resizeMode="cover"
                    style={{ width: 56, height: 56, borderRadius: 56 }}
                />
                <View style={{ marginLeft: 20 }}>
                    <CustomText h3 text={noti.user_name} style={{ color: colors.mainText }} />
                    <CustomText s text={`${noti.content} • ${noti.created_at}`} style={{ color: colors.secondaryText }} />
                </View>
            </View>
            <View style={{ width: 100 }}>
                <CustomButton title="Follow" type="primary" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})