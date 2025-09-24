import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [goal, setGoal]               = useState('')
    const [goalsArray, setGoalsArray]   = useState([])

    const addGoal = () => {
        setGoalsArray(currentGoals => [...currentGoals, goal])
        setGoal('')
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput} 
                    placeholder='Enter Your Goal' 
                    onChangeText={setGoal}
                    value={goal}
                />
                <Button onPress={addGoal} title='Add Goal'></Button>
            </View>
            <View style={styles.goalsContainer}>
                <ScrollView alwaysBounceVertical={false}>
                    {goalsArray.map((goal, index) => (
                        <View key={index} style={styles.goalItem}>
                            <Text style={styles.goalText} >{goal}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
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
    },
    goalsContainer:{
        flex: 10,
    },
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

});
