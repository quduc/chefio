import { colors } from 'constants/colors';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';
interface Props {
    step?: number;
    type?: string;
}
export const CircleStep: FC<Props> = ({ step, type }) => {
    return (
        <View style={styles.circleStep}>
            <CustomText s text={step} style={{ color: colors.white }} />
        </View>
    )
}

const styles = StyleSheet.create({
    circleStep: {
        width: 24,
        height: 24,
        borderRadius: 20,
        backgroundColor: colors.mainText,
        alignItems: 'center',
        justifyContent: 'center'
    }
})