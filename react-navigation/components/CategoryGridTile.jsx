import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = ({ title, colour, onPressGrind }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPressGrind}
            >
                <View style={[styles.innerContainer, { backgroundColor: colour }]}>
                    <Text style={styles.textItem}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 16,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        ...Platform.select({
            android: {
                overflow: 'hidden',
            },
            ios: {
                overflow: 'visible',
                shadowColor: 'black',
                shadowOpacity: 0.25,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
            },
        }),
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textItem: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
