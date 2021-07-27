import { CustomBackground } from 'components/CustomBackground';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
const notifications = [
    {
        "id":0,
        "type":0,
        "user_image":"https://randomuser.me/api/portraits/women/5.jpg",
        "user_name":"Dean Winchester",
        "content":"now following you",
        "created_at":"1h"
    }
]
export const Notification = () => {
    return (
        <View style={styles.container}>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:colors.background,
        paddingTop:20,
        paddingHorizontal:20
    }
})