import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

const MealDetailsScreen = ({ navigation, route }) => {
    const mealId = route.params.mealId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meal Details',
        });
    }, []);

    return (
        <View>
            <Text>Pravin</Text>
        </View>
    );
};

export default MealDetailsScreen;
