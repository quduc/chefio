import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "screens/onboarding/Onboarding";
import { SignIn } from "screens/signin/SignIn";
import { SignUp } from 'screens/signup/SignUp';
import { MainBottomTab } from './MainBottomTab';
import { RecipeDetail } from 'screens/recipedetail/RecipeDetail';
const Stack = createStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="MainBottomTab"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="MainBottomTab"
                component={MainBottomTab}
            />
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
            <Stack.Screen
                name="RecipeDetail"
                component={RecipeDetail}
            />
        </Stack.Navigator>
    )
}