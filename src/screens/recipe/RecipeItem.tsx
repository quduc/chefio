import { useNavigation } from '@react-navigation/core';
import { CustomText } from 'components/CustomText';
import { colors } from 'constants/colors';
import constants from 'constants/constants';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    item: any
}
export const RecipeItem: FC<Props> = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
            style={styles.recipe}>
            <View style={styles.row}>
                <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    style={styles.userImage}
                    source={{
                        uri: item.user_image,
                        priority: FastImage.priority.normal,
                    }}

                />
                <CustomText s text={item.user_name} style={{ color: colors.mainText, marginLeft: 20 }} />
            </View>
            <View style={styles.row}>
                <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    style={styles.foodImage}
                    source={{
                        uri: item.food_image[1],
                        priority: FastImage.priority.normal,
                    }}
                />
                <View style={styles.like}>
                    <Icon name="heart" size={20} color={colors.white} />
                </View>
            </View>
            <CustomText h2 text={item.food_name} style={{ color: colors.mainText }} />
            <CustomText s text={`${item.category} • ${item.estimated_time}`} style={{ marginTop: 10, color: colors.secondaryText }} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recipe: {
        justifyContent: 'center',
        width: (constants.widthDevice - 60) / 2,
        marginVertical: 10
    },
    userImage: {
        width: 31,
        height: 31,
        borderRadius: 11
    },
    foodImage: {
        width: (constants.widthDevice - 60) / 2,
        height: (constants.widthDevice - 60) / 2,
        borderRadius: 16,
        marginVertical: 20
    },
    like: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#FFFFFF70',
        marginLeft: -42,
        marginTop: -110,
        alignItems: 'center',
        justifyContent: 'center'
    }
})