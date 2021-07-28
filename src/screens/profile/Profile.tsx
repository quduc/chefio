import { useNavigation } from '@react-navigation/core';
import { CustomButton } from 'components/CustomButton';
import { CustomeDivider } from 'components/CustomDivider';
import { CustomInput } from 'components/CustomInput';
import { CustomText, CustomText as Text } from 'components/CustomText';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RecipeItem } from 'screens/recipe/RecipeItem';

const tabs = [
    {
        "id": 0,
        "name": "Recipes"
    },
    {
        "id": 1,
        "name": "Liked"
    },
]
const recipes = [
    {
        "id": 1,
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],

    },
    {
        "id": 2,
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 3,
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 4,
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 5,
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 6,
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    }
]
const liked = [
    {
        "id": 1,
        "user_name": "Calum Lewis",
        "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],

    },
    {
        "id": 2,
        "user_name": "Calum Lewis",
        "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 3,
        "user_name": "Calum Lewis",
        "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 4,
        "user_name": "Calum Lewis",
        "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 5,
        "user_name": "Calum Lewis",
        "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    },
    {
        "id": 6,
        "user_name": "Calum Lewis",
        "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
        "food_name": "Pancake",
        "category": "Food",
        "estimated_time": "> 60m",
        "food_image": [
            "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262907/pexels-photo-7262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/7262912/pexels-photo-7262912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
    }
]
export const Profile = () => {
    const [tab, setTab] = useState<number>(0);
    const renderUserInfo = (title: string, content: string) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <CustomText h2 text={content} style={{ color: colors.mainText }} />
                <CustomText s text={title} style={{ color: colors.secondaryText }} />
            </View>
        )
    }
    const renderTab = () => {
        return (
            <View style={styles.navigate_tab}>
                {
                    tabs.map(t => {
                        return (
                            <TouchableOpacity
                                onPress={() => setTab(t.id)}
                                key={t.id}
                                style={styles.tab_child}>
                                <CustomText h2 text={t.name} style={tab == t.id ? styles.tab_name_active : styles.tab_name_inactive} />

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    const renderRecipeItem = ({ item }: any) => {
        return (
            <RecipeItem item={item} />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.user_info}>
                <Image
                    source={require('../../resources/images/Avatar.png')}
                    style={{ width: 90, height: 90, borderRadius: 90 }}
                    resizeMode="contain"
                />
                <View style={{ marginLeft: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.share}>
                        <CustomText h2 text="Choirul Syafril" style={{ color: colors.mainText }} />
                        <Image
                            source={require('../../resources/images/share.png')}
                            resizeMode="contain"
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                    <View style={styles.tab}>
                        {renderUserInfo("Recipes", "32")}
                        {renderUserInfo("Following", "782")}
                        {renderUserInfo("Followers", "1.287")}
                    </View>
                </View>
            </View>
            <CustomeDivider style={{ marginVertical: 20 }} />
            {renderTab()}
            {tab == 0 &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={recipes}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderRecipeItem}
                />
            }
            {tab == 1 &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={liked}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderRecipeItem}
                />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
    },
    user_info: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    share: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: constants.widthDevice - 160,
        marginBottom: 15
    },
    tab: {
        width: constants.widthDevice - 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navigate_tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    tab_name_active: {
        color: colors.primary,
        textAlign: 'center',
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        paddingBottom: 15
    },
    tab_name_inactive: {
        color: colors.mainText,
        textAlign: 'center',
        borderBottomColor: colors.secondaryText,
        borderBottomWidth: 2,
        paddingBottom: 15
    },
    tab_child: {
        width: constants.widthDevice / 2,
        height: 40,
    },

})