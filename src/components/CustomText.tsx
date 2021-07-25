import { colors } from 'constants/colors';
import React, { FC } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
interface Props {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    p1?: boolean;
    p2?: boolean;
    s?: boolean;
    style?: TextStyle;
    text: any;
    onPress?: () => void;
    numberOfLines?: number;
}
export const CustomText: FC<Props> = (props) => {
    let style = {};
    if (props.h1) style = styles.h1;
    if (props.h2) style = styles.h2;
    if (props.h3) style = styles.h3;
    if (props.p1) style = styles.p1;
    if (props.p2) style = styles.p2;
    if (props.s) style = styles.s;
    return (
        <Text
            
            {...props}
            numberOfLines={props.numberOfLines ? props.numberOfLines : undefined}
            style={[style, {
                ...props.style
            }]}>{props.text}
        </Text>
    )
}
const styles = StyleSheet.create({
    h1: {
        fontFamily: 'Inter-Bold',
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    h2: {
        fontFamily: 'Inter-Bold',
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 27,
    },
    h3: {
        fontFamily: 'Inter-Bold',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 25,
    },
    p1: {
        fontFamily: 'Inter-Medium',
        fontSize: 17,
        fontWeight: 'normal',
        lineHeight: 27,
    },
    p2: {
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        fontWeight: 'normal',
        lineHeight: 25
    },
    s: {
        fontFamily: 'Inter-Medium',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 15
    }
})

