import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Image, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { Profile } from 'screens/profile/Profile';
const Tab = createBottomTabNavigator()
interface Props { };
export const MainBottomTab: FC<Props> = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                labelStyle: { fontSize: 10, fontWeight: 'bold', paddingBottom: 4 },
                style: { backgroundColor: colors.white, borderTopColor: 'transparent', height: 56, paddingTop: 8 },
                inactiveTintColor: colors.secondaryText,
                activeTintColor: colors.primary,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../resources/images/home.png')}
                            resizeMode="contain"
                            style={focused ? styles.image_focus : styles.image_un_focus}
                        />
                    ),
                    title: 'Home',
                }} />
            <Tab.Screen
                name="Upload"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../resources/images/edit.png')}
                            resizeMode="contain"
                            style={focused ? styles.image_focus : styles.image_un_focus}
                        />
                    ),
                    title: 'Upload',
                }} />
            <Tab.Screen
                name="Notification"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../resources/images/notification.png')}
                            resizeMode="contain"
                            style={focused ? styles.image_focus : styles.image_un_focus}
                        />
                    ),
                    title: 'Notification'
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../resources/images/user.png')}
                            resizeMode="contain"
                            style={focused ? styles.image_focus : styles.image_un_focus}
                        />
                    ),
                    title: 'Profile'
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    image_focus: {
        tintColor: colors.primary,
        width: 22,
        height: 22,
    },
    image_un_focus: {
        tintColor: colors.secondaryText,
        width: 22,
        height: 22,
    },
});