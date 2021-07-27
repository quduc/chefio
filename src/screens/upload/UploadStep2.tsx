import { useNavigation } from '@react-navigation/core';
import { CommonActions, StackActions } from '@react-navigation/native';
import { CircleStep } from 'components/CircleStep';
import { CustomBackground } from 'components/CustomBackground';
import { CustomButton } from 'components/CustomButton';
import { CustomeDivider } from 'components/CustomDivider';
import { CustomInput } from 'components/CustomInput';
import { CustomInputMultipleLine } from 'components/CustomInputMultipleLine';
import { CustomText } from 'components/CustomText';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React, { FC, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UploadSuccessful } from './UploadSuccessful';
interface Props { }
export const UploadStep2: FC<Props> = (prop) => {
    const navigation = useNavigation();
    const [showUploadSuccessful, setShowUploadSuccessful] = useState<boolean>(false);
    const renderIngredientItem = () => {
        return (
            <View style={styles.ingredient}>
                <Image
                    source={require('../../resources/images/drag.png')}
                    style={{
                        width: 24,
                        height: 24
                    }}
                    resizeMode="contain"
                />
                <View style={{ width: constants.widthDevice - 70 }}>
                    <CustomInput
                        placeholder="Enter ingredient"
                    />
                </View>
            </View>
        )
    }
    const renderStepItem = () => {
        return (
            <View style={styles.ingredient}>
                <View style={{ alignSelf: 'flex-start', justifyContent: 'center', marginTop: 10 }}>
                    <CircleStep step={1} />
                    <Image
                        source={require('../../resources/images/drag.png')}
                        style={{
                            width: 24,
                            height: 24,
                            marginTop: 10
                        }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ width: constants.widthDevice - 75 }}>
                    <CustomInputMultipleLine
                        placeholder="Tell a little about your food"
                    />
                    <TouchableOpacity style={styles.btnCamera}>
                        <Image
                            source={require('../../resources/images/camera.png')}
                            style={{ width: 24, height: 24 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const onGoHome = () => {
        navigation.dispatch(
            CommonActions.navigate("Home")
        )
    }
    return (
        <CustomBackground>
            <View style={styles.section}>
                <CustomText h2 text="Ingredients" style={styles.sectionTitle} />
                {renderIngredientItem()}
                {renderIngredientItem()}
                <CustomButton
                    title="+ Ingredient"
                    type="secondary_outline"
                />
            </View>
            <View style={{ height: 20 }} />
            <CustomeDivider />
            <View style={styles.section}>
                <CustomText h2 text="Steps" style={styles.sectionTitle} />
                {renderStepItem()}
                {renderStepItem()}
                <View style={{ height: 20 }} />
                <CustomButton
                    title="+ Step"
                    type="secondary_outline"
                />
            </View>
            <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }]}>
                <View style={{ width: (constants.widthDevice - 50) / 2 }}>
                    <CustomButton
                        onPress={() => navigation.goBack()}
                        title="Back"
                        type="secondary"
                    />
                </View>
                <View style={{ width: (constants.widthDevice - 50) / 2 }}>
                    <CustomButton
                        onPress={() => setShowUploadSuccessful(true)}
                        title="Next"
                        type="primary"
                    />
                </View>
            </View>
            <UploadSuccessful onRequestClose={() => setShowUploadSuccessful(false)}
                showSuccessful={showUploadSuccessful}
                onPress={onGoHome}
            />
        </CustomBackground>
    )
}
const styles = StyleSheet.create({
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
    },
    ingredient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnCamera: {
        width: '100%',
        height: 44,
        backgroundColor: colors.outline,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})