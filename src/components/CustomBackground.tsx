import React, { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from '../constants/colors';

interface Props extends ViewProps {

};
export const CustomBackground: FC<Props> = (props) => {
    const { style: styleOverride, children } = props;
    const styles = [{ paddingHorizontal: 20, flex: 1, backgroundColor: colors.background }, styleOverride];
    return (
        <>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={styles}>{children}</View>
            </KeyboardAwareScrollView>
        </>

    );
};
