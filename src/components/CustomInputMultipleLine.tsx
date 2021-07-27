import React from 'react';
import { FC, LegacyRef } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
interface Props extends TextInputProps {
    style?: StyleProp<ViewStyle>,
    multiline?: boolean,
    heightInput?: string | number,
    refInput?: LegacyRef<TextInput>,
    icon?: string,
}
export const CustomInputMultipleLine: FC<Props> = (props) => {
    const { style, heightInput, refInput, icon } = props;
    return (
        <View style={[style]}>

            <TextInput
                {...props}
                ref={refInput}
                editable={true}
                autoCapitalize='none'
                placeholderTextColor={colors.secondaryText}
                style={[styles.text_input, { height: heightInput || 110 }]}
                blurOnSubmit={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 32,
        borderColor: colors.outline,
        paddingHorizontal: 20,
        width: '100%',
        height: 56,
        alignItems: 'center',
        marginVertical: 10
    },
    text_input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.outline,
        paddingHorizontal: 20,
        color: colors.black,
        marginVertical: 10,
        textAlignVertical:'top'
    }
})