import { CustomText as Text } from 'components/CustomText';
import { colors } from 'constants/colors';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
    character: boolean;
    number: boolean;
}
export const Validate: FC<Props> = (props) => {
    const { character, number } = props;
    const requireCondition = (text: string, validate: boolean) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <View style={validate ? styles.circle : styles.circle_not_validate}>
                    <Icon name="check" size={10} color={validate ? colors.primary : colors.form} />
                </View>
                <Text p2 text={text} style={{ color: validate ? colors.black : colors.secondaryText }} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text p1 text="Your Password must contain:" style={{ color: colors.secondaryText }} />
            {requireCondition("Atleast 6 characters", character)}
            {requireCondition("Contains a number", number)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3FFF1',
        marginRight: 10
    },
    circle_not_validate: {
        width: 24,
        height: 24,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9FA5C0',
        marginRight: 10
    }
})