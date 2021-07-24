import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "screens/onboarding/Onboarding";
import { SignIn } from "screens/signin/SignIn";
import { NavigationContainer } from '@react-navigation/native';
import { SignUp } from 'screens/signup/SignUp';
const Stack = createStackNavigator();

export const MainStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
            />
            <Stack.Screen 
                name="SignIn"
                component={SignIn}
            />
             <Stack.Screen 
                name="SignUp"
                component={SignUp}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}