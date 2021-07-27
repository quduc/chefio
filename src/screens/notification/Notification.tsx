import { CustomBackground } from 'components/CustomBackground';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Follow } from './Follow';
import { Like } from './Like';

const notifications = [
    {
        "id": 0,
        "type": 0,
        "user_image": "https://randomuser.me/api/portraits/women/5.jpg",
        "user_name": "Dean Winchester",
        "content": "now following you",
        "created_at": "1h"
    },
    {
        "id": 1,
        "type": 1,
        "user_image": "https://randomuser.me/api/portraits/women/5.jpg",
        "user_name": "Dean Winchester",
        "content": "liked your recipe",
        "created_at": "1h",
        "noti_image": "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id": 2,
        "type": 0,
        "user_image": "https://randomuser.me/api/portraits/women/5.jpg",
        "user_name": "Dean Winchester",
        "content": "now following you",
        "created_at": "1h"
    },
    {
        "id": 3,
        "type": 1,
        "user_image": "https://randomuser.me/api/portraits/women/5.jpg",
        "user_name": "Dean Winchester",
        "content": "liked your recipe",
        "created_at": "1h",
        "noti_image": "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id": 4,
        "type": 1,
        "user_image": "https://randomuser.me/api/portraits/women/5.jpg",
        "user_name": "Dean Winchester",
        "content": "liked your recipe",
        "created_at": "1h",
        "noti_image": "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]
export const Notification = () => {
    const renderItem = ({ item }: any) => {
        return (
            <>
                {item.type == 0
                    ? (<Follow noti={item} />)
                    : (<Like noti={item} />)}
            </>
        )

    }
    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 20,
        paddingHorizontal: 20
    }
})