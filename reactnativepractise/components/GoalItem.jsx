import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = ({data, index, onDeleteGoal}) => {

    const handlePress = () => {
        onDeleteGoal(index);
    }

    return (
            <View style={styles.goalItem}>
                <Pressable android_ripple={{color: '#dddddd'}} onPress={handlePress} style={({pressed}) => pressed && styles.pressedItem}>
                    <Text style={styles.goalText} >{data}</Text>
                </Pressable>
            </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',
    },
    goalText:{
        color: 'white',
        padding: 8,
    },
    pressedItem:{
        opacity: 0.5,
    }
})
