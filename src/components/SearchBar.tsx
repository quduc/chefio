import { colors } from 'constants/colors';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    keyword?: string;
    onChangeText?: (text: string) => void;
}
export const SearchBar: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="search" size={24} color={colors.mainText} />
                <TextInput
                    placeholderTextColor={colors.secondaryText}
                    autoCapitalize='none'
                    blurOnSubmit={false}
                    placeholder="Search"
                    style={styles.textInput}
                    onChangeText={props.onChangeText}
                    value={props.keyword}

                />
            </View>
            <View style={styles.circle}>
                <Icon name="close" size={16} color={colors.white} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderRadius: 32,
        backgroundColor: colors.form,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    textInput: {
        marginLeft: 10,
        color: colors.mainText
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: colors.mainText,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})