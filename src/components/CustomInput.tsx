import React from 'react';
import { FC, LegacyRef } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props extends TextInputProps {
    style?: StyleProp<ViewStyle>,
    multiline?: boolean,
    heightInput?: string | number,
    refInput?: LegacyRef<TextInput>,
    icon?: string,
}
export const CustomInput: FC<Props> = (props) => {
    const { style, heightInput, refInput, icon } = props;
    return (
        <View style={[style]}>
            {
                icon ? (
                    <View style={styles.row}>
                        <Icon name={icon} color={colors.black} size={20} style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }} />
                        <TextInput
                            {...props}
                            ref={refInput}
                            editable={true}
                            autoCapitalize='none'
                            placeholderTextColor={colors.secondaryText}
                            blurOnSubmit={false}
                        />
                    </View>
                ) : (
                    <TextInput
                        {...props}
                        ref={refInput}
                        editable={true}
                        autoCapitalize='none'
                        placeholderTextColor={colors.secondaryText}
                        style={[styles.text_input, { height: heightInput || 56 }]}
                        blurOnSubmit={false}
                    />
                )
            }
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
    title_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 32,
        borderColor: colors.outline,
        paddingHorizontal: 20,
        color: colors.white,
        marginVertical: 10
    }
})