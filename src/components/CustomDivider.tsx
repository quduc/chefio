import { colors } from 'constants/colors';
import React, { FC } from 'react';
import { Dimensions, StyleProp, View } from 'react-native';
interface Props {
    style?: any;
}
export const CustomeDivider: FC<Props> = ({ style }) => {
    return (
        <View
            style={[style, {
                backgroundColor: colors.form,
                width: Dimensions.get('window').width,
                height: 8,
                marginHorizontal: -20
            }]}
        />
    )
}
