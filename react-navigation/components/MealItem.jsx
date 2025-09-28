import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetails', {
            mealId: 'm1',
        });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.imageItem} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>{duration}m</Text>
                        <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    imageItem: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.25,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
            },
            android: {
                overflow: 'hidden',
            },
        }),
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 8,
    },
    detailsText: {
        fontSize: 12,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
});
