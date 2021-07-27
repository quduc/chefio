import { colors } from 'constants/colors';
import React, { FC, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextStyle } from 'react-native';
import { ViewProps } from 'react-native';
import { CustomText } from './CustomText';
interface Props extends ViewProps {
    title: string;
    onPress?: () => void;
    styleTitle?: TextStyle;
    rightIcon?: ReactNode
    type: 'primary' | 'secondary' | 'primary_outline' | 'secondary_outline';
    disabled?: boolean | undefined
}
export const CustomButton: FC<Props> = (props) => {
    const { title, onPress, style, styleTitle, type, disabled } = props;
    var buttonColors: string = '';
    var textColor: string = '';
    var borderColor: string = '';
    switch (type) {
        case 'primary':
            textColor = colors.white;
            buttonColors = colors.primary;
            borderColor = colors.primary;
            break;
        case 'secondary':
            textColor = colors.black;
            buttonColors = colors.outline
            borderColor = colors.outline;
            break;
        case 'primary_outline':
            textColor = colors.primary;
            buttonColors = colors.white;
            borderColor = colors.primary;
            break;
        case 'secondary_outline':
            textColor = colors.black;
            buttonColors = colors.white;
            borderColor = colors.outline;
            break;
    }
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColors, borderColor: borderColor }]} onPress={onPress} disabled={props?.disabled}>
            <CustomText h3 text={title} style={{ color: textColor }} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 56,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        marginTop: 10,
        borderWidth: 1
    },
})