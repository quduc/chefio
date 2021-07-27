import { CustomBackground } from 'components/CustomBackground';
import { CustomButton } from 'components/CustomButton';
import { CustomeDivider } from 'components/CustomDivider';
import { CustomInput } from 'components/CustomInput';
import { CustomText as Text } from 'components/CustomText';
import { SearchBar } from 'components/SearchBar';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React from 'react';
import { LogBox, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native-gesture-handler';
import { RecipeItem } from 'screens/recipe/RecipeItem';
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain']);
const categories = [
    {
        "id": 1,
        "name": "All"
    },
    {
        "id": 2,
        "name": "Food"
    },
    {
        "id": 3,
        "name": "Drink"
    },
]
const recipes = [
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
export const Home = () => {
    const renderCategory = ({ item }: any) => {
        return (
            <View style={styles.cateTag}>
                <Text h3 text={item.name} style={{ color: colors.white, textAlign: 'center' }} />
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
            <SearchBar />
            <Text h2 text="Category" style={{ color: colors.mainText, marginBottom: 15 }} />
            <View style={styles.cateList}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={categories}
                    renderItem={renderCategory}
                />
            </View>
            <CustomeDivider />
            <View style={styles.recipeList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    data={recipes}
                    renderItem={renderRecipeItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: colors.background
    },
    cateTag: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 32,
        height: 48,
        backgroundColor: colors.primary,
        marginRight: 10
    },
    cateList: {
        height: 48,
        marginBottom: 20
    },
    recipeList: {
        marginTop: 10,
        flex: 1
    }
})