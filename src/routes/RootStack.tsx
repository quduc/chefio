import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { MainStack } from './MainStack';
const Stack = createStackNavigator();
interface Props { };

export const RootStack: FC<Props> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator mode="modal" screenOptions={{ headerTitleAlign: 'center' }}>
                <Stack.Screen
                    name="MainStack"
                    component={MainStack}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

