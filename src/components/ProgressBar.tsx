import { colors } from 'constants/colors';
import React, { FC, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Image } from 'react-native';
interface Props {
    step: number;
    steps: number;
}
export const ProgressBar: FC<Props> = ({ step, steps }) => {
    const [width, setWidth] = useState<number>(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current;
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true
        }).start();
    }, [])
    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width])
    return (
        <View style={styles.container}
            onLayout={e => {
                const newWidth = e.nativeEvent.layout.width;
                setWidth(newWidth);
            }}
        >
            <Animated.View style={[styles.tracking, {
                transform: [
                    {
                        translateX: animatedValue
                    }
                ]
            }]}>
                <Animated.Image
                    source={require('../resources/images/thumSlider.png')}
                    style={[styles.image, {
                        transform: [
                            {
                                translateX: animatedValue
                            }
                        ]
                    }]}
                    resizeMode="contain"
                />
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 20
    },
    tracking: {
        height: 10,
        width: '100%',
        borderRadius: 10,
        backgroundColor: colors.primary,
        position: 'absolute',
        left: 0,
        top: 0,
        
    },
    image: {
        height: 24,
        width: 24,
        position: 'absolute',
        left: 0,
        top: 0,
    }
})