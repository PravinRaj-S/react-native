import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const GoalItem = ({data}) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText} >{data}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',
    },
    goalText:{
        color: 'white',
    }
})
