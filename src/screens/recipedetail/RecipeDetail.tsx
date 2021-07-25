import { RouteProp } from '@react-navigation/core';
import React, { FC } from 'react';
import { Text } from 'react-native';

interface Props {
    route: RouteProp<{ params: { recipe: any } }, 'params'>
}
export const RecipeDetail: FC<Props> = ({ route: { params: { recipe } } }) => {
    return (
        <Text>asds</Text>
    )
}