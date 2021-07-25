import { colors } from 'constants/colors';
import React from 'react';
import { Dimensions, View } from 'react-native';

export const CustomeDivider = () => {
    return (
        <View
            style={{
                backgroundColor: colors.form,
                width: Dimensions.get('window').width,
                height: 8,
                marginHorizontal:-20
            }}
        />
    )
}
