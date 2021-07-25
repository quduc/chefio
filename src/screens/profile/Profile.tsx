import { useNavigation } from '@react-navigation/core';
import { CustomBackground } from 'components/CustomBackground';
import { CustomButton } from 'components/CustomButton';
import { CustomInput } from 'components/CustomInput';
import { CustomText as Text } from 'components/CustomText';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export const Profile = () => {
    return (
        <CustomBackground>
            <Text p1 text="Profile" />
        </CustomBackground>
    )
}