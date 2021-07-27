import { CommonActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomText } from 'components/CustomText';
import { colors } from 'constants/colors';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { UploadStep1 } from 'screens/upload/UploadStep1';
import { UploadStep2 } from 'screens/upload/UploadStep2';
import { UploadSuccessful } from 'screens/upload/UploadSuccessful';

const Stack = createStackNavigator();
export const UploadStack = () => {
    const navigation = useNavigation();
    const onGoHome = () => {
        navigation.dispatch(
            CommonActions.navigate("Home")
        )
    }
    return (
        <Stack.Navigator
            initialRouteName="UploadStep1"
            screenOptions={{
                headerShown: true
            }}
        >
            <Stack.Screen
                name="UploadStep1"
                component={UploadStep1}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: colors.white },
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={onGoHome}>
                            <CustomText h2 text="Cancel" style={{ color: colors.secondary, marginLeft: 20 }} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => <CustomText h2 text="1/2" style={{ color: colors.mainText, marginRight: 20 }} />
                })}
            />
            <Stack.Screen
                name="UploadStep2"
                component={UploadStep2}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: colors.white },
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={onGoHome}>
                            <CustomText h2 text="Cancel" style={{ color: colors.secondary, marginLeft: 20 }} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => <CustomText h2 text="2/2" style={{ color: colors.mainText, marginRight: 20 }} />
                })}
            />
            <Stack.Screen
                name="UploadSuccessful"
                component={UploadSuccessful}
            />
        </Stack.Navigator>
    )
}