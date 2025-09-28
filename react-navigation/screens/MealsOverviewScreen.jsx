import React, { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    const renderItem = (itemData) => {
        const mealItem = itemData.item;

        const mealItemProps = {
            title: mealItem.title,
            imageUrl: mealItem.imageUrl,
            duration: mealItem.duration,
            complexity: mealItem.complexity,
            affordability: mealItem.affordability,
        };

        return <MealItem {...mealItemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
