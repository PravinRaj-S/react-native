import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({onAddGoal}) => {

    const [goal, setGoal]    = useState('')

    const addGoal = () => {
        onAddGoal(goal)
        setGoal('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput} 
                placeholder='Enter Your Goal' 
                onChangeText={setGoal}
                value={goal}
            />
            <Button onPress={addGoal} title='Add Goal'></Button>
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1,
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    }
})