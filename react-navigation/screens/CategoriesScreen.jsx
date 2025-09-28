import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('Meals Overview', {
                categoryId: itemData.item.id,
            });
        };

        return (
            <CategoryGridTile
                title={itemData.item.title}
                colour={itemData.item.color}
                onPressGrind={pressHandler}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default CategoriesScreen;
