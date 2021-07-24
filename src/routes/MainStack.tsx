import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "screens/onboarding/Onboarding";
import { SignIn } from "screens/signin/SignIn";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export const MainStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName="SignIn"
        >
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}