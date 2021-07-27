import { useNavigation } from '@react-navigation/core';
import { CustomBackground } from 'components/CustomBackground';
import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { CustomInputMultipleLine } from 'components/CustomInputMultipleLine';
import { CustomText } from 'components/CustomText';
import { ProgressBar } from 'components/ProgressBar';
import { colors } from 'constants/colors';
import React, { FC } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props { }
export const UploadStep1: FC<Props> = (prop) => {
    const navigation = useNavigation();
    return (
        <CustomBackground>
            <View style={styles.addCover}>
                <Image
                    source={require('../../resources/images/icon_gallery.png')}
                    style={styles.cover}
                    resizeMode="contain"
                />
                <CustomText h3 text="Add Cover Photo" style={{ color: colors.title, marginVertical: 10 }} />
                <CustomText s text="(up to 12 Mb)" style={{ color: colors.outline }} />
            </View>
            <View style={styles.section}>
                <CustomText h2 text="Food Name" style={styles.sectionTitle} />
                <CustomInput
                    placeholder="Enter food name"
                />
            </View>
            <View style={styles.section}>
                <CustomText h2 text="Description" style={styles.sectionTitle} />
                <CustomInputMultipleLine
                    placeholder="Tell a little about your food"
                />
            </View>
            <View style={styles.section}>
                <CustomText h2 text="Cooking Duration (in minutes)" style={styles.sectionTitle} />
                <View style={styles.durationTime}>
                    <TouchableOpacity>
                        <CustomText h3 text="-10" style={{ color: colors.primary }} />
                    </TouchableOpacity>
                    <CustomText h3 text="40 minutes" />
                    <TouchableOpacity>
                        <CustomText h3 text="+10" style={{ color: colors.primary }} />
                    </TouchableOpacity>
                </View>
                <ProgressBar step={8} steps={10} />
            </View>
            <View style={styles.section}>
                <CustomButton
                    title="Next"
                    type="primary"
                    onPress={() => navigation.navigate("UploadStep2")}

                />
            </View>
        </CustomBackground>
    )
}
const styles = StyleSheet.create({
    addCover: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.outline,
        borderStyle: 'dashed',
        width: '100%',
        height: 161,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cover: {
        width: 64,
        height: 64,
        tintColor: colors.secondaryText
    },
    section: {
        marginVertical: 5
    },
    sectionTitle: {
        color: colors.mainText
    },
    durationTime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    }
})