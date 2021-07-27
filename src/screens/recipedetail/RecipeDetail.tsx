import { RouteProp, useNavigation } from '@react-navigation/core';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React, { FC, useRef } from 'react';
import { StyleSheet, Animated, FlatList, View, LogBox } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import FastImage from 'react-native-fast-image';
import { CustomText } from 'components/CustomText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CircleStep } from 'components/CircleStep';
LogBox.ignoreLogs(['Calling'])
interface Props {
    route: RouteProp<{ params: { recipe: any } }, 'params'>
}
const ingredients = [
    {
        "id": 0,
        "name": "4 Eggs"
    },
    {
        "id": 1,
        "name": "1/2 Butter"
    },
    {
        "id": 3,
        "name": "1/2 Butter"
    },
    {
        "id": 4,
        "name": "4 Eggs"
    },
];
const steps = [
    {
        "id": 1,
        "detail": "Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your",
        "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id": 2,
        "detail": "Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your",
        "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id": 3,
        "detail": "Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your",
        "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id": 4,
        "detail": "Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your",
        "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]
export const RecipeDetail: FC<Props> = ({ route: { params: { recipe } } }) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const renderItem = ({ item }: any) => {
        return (
            <View>
                <FastImage
                    source={{ uri: item }}
                    style={styles.image}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
        )
    }
    const renderIngredientItem = ({ item }: any) => {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                <View style={styles.circle}>
                    <Icon name="check" size={12} color={colors.primary} />
                </View>
                <CustomText p2 text={item.name} style={{ color: colors.mainText, marginLeft: 10 }} />
            </View>
        )
    }
    const renderStepItem = ({ item }: any) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between' }}>
                <CircleStep step={item.id} />
                <View style={{ width: constants.widthDevice - 80, alignItems: 'flex-start' }}>
                    <CustomText
                        p2
                        numberOfLines={8}
                        text="Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your"
                        style={{ color: colors.mainText, alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginTop: -5 }}
                    />
                    <FastImage
                        source={{ uri: item.image }}
                        resizeMode={FastImage.resizeMode.cover}
                        style={{ width: constants.widthDevice - 80, height: 155, borderRadius: 12, marginVertical: 10 }}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Animated.FlatList
                    snapToInterval={constants.heightDevice * 0.75}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    decelerationRate="fast"
                    data={recipe.food_image}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                />
                <View style={styles.btnBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" size={36} color={colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={styles.pagination}>
                    {recipe.food_image.map((_: any, index: number) => {
                        return (
                            <View key={index} style={styles.dot} />
                        )
                    })}
                    <Animated.View style={[styles.dotIndicator, {
                        transform: [{
                            translateY: Animated.divide(scrollY, constants.heightDevice * 0.75).interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 16]
                            })
                        }]
                    }]} />
                </View>

            </View>
            <BottomSheet
                index={0}
                snapPoints={[constants.heightDevice * 0.25, constants.heightDevice]}
            >
                <BottomSheetScrollView style={{ backgroundColor: colors.white }} contentContainerStyle={{ padding: 20 }}>
                    <CustomText h2 text={recipe.food_name} style={{ color: colors.title }} />
                    <CustomText s text={`${recipe.category} • ${recipe.estimated_time}`} style={{ color: colors.secondaryText, marginVertical: 10 }} />
                    <View style={styles.user}>
                        <View style={{ flexDirection: 'row' }}>
                            <FastImage
                                source={{ uri: recipe.user_image }}
                                style={{ width: 32, height: 32, borderRadius: 16 }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <CustomText h3 text={recipe.user_name} style={{ color: colors.title, marginLeft: 10 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.like}>
                                <Icon name="heart" size={15} color={colors.white} />
                            </View>
                            <CustomText h3 text="273 Likes" style={{ color: colors.title, marginLeft: 10 }} />
                        </View>
                    </View>
                    <View style={styles.desciption}>
                        <CustomText h2 text="Description" style={{ color: colors.title, marginBottom: 10 }} />
                        <CustomText p2
                            text="Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your"
                            numberOfLines={3}
                            style={{ color: colors.secondaryText }}
                        />
                    </View>
                    <View style={styles.desciption}>
                        <CustomText h2 text="Ingredients" style={{ color: colors.title, marginBottom: 10 }} />
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={ingredients}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderIngredientItem}
                        />
                    </View>
                    <View style={styles.desciption}>
                        <CustomText h2 text="Steps" style={{ color: colors.title, marginBottom: 10 }} />
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={steps}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderStepItem}
                        />
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: constants.heightDevice * 0.75,
        overflow: 'hidden'
    },
    image: {
        width: constants.widthDevice,
        height: constants.heightDevice * 0.75,
    },
    pagination: {
        position: 'absolute',
        top: (constants.heightDevice * 0.75) / 2,
        left: 20
    },
    btnBack: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 56,
        height: 56,
        borderRadius: 32,
        backgroundColor: '#FFFFFF90',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: colors.primary,
        marginBottom: 8
    },
    dotIndicator: {
        width: 16,
        height: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.primary,
        position: 'absolute',
        top: -4,
        left: -4
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.outline,
        borderBottomWidth: 1,
        paddingBottom: 15,
        marginTop: 10
    },
    desciption: {
        justifyContent: 'space-between',
        borderBottomColor: colors.outline,
        borderBottomWidth: 1,
        paddingBottom: 15,
        marginTop: 10
    },
    like: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 20,
        backgroundColor: '#E3FFF8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleStep: {
        width: 24,
        height: 24,
        borderRadius: 20,
        backgroundColor: colors.mainText,
        alignItems: 'center',
        justifyContent: 'center'
    }
})