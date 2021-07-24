import React, { useState } from 'react';

import FastImage, { FastImageProps } from 'react-native-fast-image';
import { ImageStyle, StyleProp, View, ViewStyle, ActivityIndicator } from 'react-native';
import { BackgroudInStyleType, BorderInStyleType, LayoutInStyleType, SpaceInStyleType } from 'types';
import { moderateScale, scale, verticalScale } from '../ultis/scale';


type Propstype = FastImageProps &
    SpaceInStyleType &
    LayoutInStyleType &
    BorderInStyleType &
    BackgroudInStyleType & {
        shadowColor?: string;
        source: any;
        defaultImage?: string;
        style?: StyleProp<ViewStyle> & StyleProp<ImageStyle>;
    };

export const CustomImage = ({
    flex,
    m,
    mt,
    mr,
    mb,
    ml,
    mv,
    mh,
    p,
    pt,
    pr,
    pb,
    pl,
    pv,
    ph,
    width,
    height,
    wrap,
    row,
    column,
    direction,
    center,
    justifyStart,
    justifyEnd,
    justifyBetween,
    justifyAround,
    justify,
    middle,
    alignItemsStart,
    alignItemsEnd,
    alignItems,
    borderRadius,
    borderWidth,
    borderColor,
    bg,
    opacity,
    style,
    source,
    defaultImage,
    circle,
    absolute,
    top,
    right,
    left,
    bottom,
    ...rest
}: Propstype) => {
    const styledComponent = [
        flex && { flex },
        width && { width: typeof width === 'number' ? scale(width) : width },
        height && { height: verticalScale(height as number) },
        m && { margin: moderateScale(m) },
        mt && { marginTop: verticalScale(mt) },
        mr && { marginRight: scale(mr) },
        mb && { marginBottom: verticalScale(mb) },
        ml && { marginLeft: scale(ml) },
        mh && { marginHorizontal: scale(mh) },
        mv && { marginVertical: verticalScale(mv) },
        p && { padding: moderateScale(p) },
        pt && { paddingTop: verticalScale(pt) },
        pr && { paddingRight: scale(pr) },
        pb && { paddingBottom: verticalScale(pb) },
        pl && { paddingLeft: scale(pl) },
        ph && { paddingHorizontal: scale(ph) },
        pv && { paddingVertical: verticalScale(pv) },
        absolute && { position: 'absolute' },
        top && { top },
        bottom && { bottom },
        left && { left },
        right && { right },
        circle && {
            width: circle,
            height: circle,
            borderRadius: circle / 2,
        },

        row && { flexDirection: 'row' },
        column && { flexDirection: 'column' },
        direction && { flexDirection: direction },
        wrap && { flexWrap: 'wrap' },
        center && { justifyContent: 'center' },
        justifyStart && { justifyContent: 'flex-start' },
        justifyEnd && { justifyContent: 'flex-end' },
        justifyAround && { justifyContent: 'space-around' },
        justifyBetween && { justifyContent: 'space-between' },
        justify && { justifyContent: justify },
        middle && { alignItems: 'center' },
        alignItemsStart && { alignItems: 'flex-start' },
        alignItemsEnd && { alignItems: 'flex-end' },
        alignItems && { alignItems },

        bg && { backgroundColor: bg },
        borderRadius && { borderRadius: moderateScale(borderRadius) },
        borderWidth && { borderWidth },
        borderColor && { borderColor },
        opacity && { opacity },
        source && source,
        style && style,
    ];
    const [loading, setLoading] = useState(true)
    return (
        <>
            {
                loading && <View style={[styledComponent, { alignItems: 'center', justifyContent: 'center' }]}>
                    <ActivityIndicator size={'small'} />
                </View>
            }
            <FastImage style={[styledComponent as any, { opacity: loading ? 0 : 1 }]}
                source={source || defaultImage}
                resizeMode={FastImage.resizeMode.cover}
                onLoadEnd={() => {
                    setLoading(false)
                }}
                {...rest} />
        </>
    )
};

