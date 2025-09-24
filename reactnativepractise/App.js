import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

    const [goalsArray, setGoalsArray]   = useState([])

    const addGoal = (goal) => {
        setGoalsArray(currentGoals => [...currentGoals, goal])
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoal}></GoalInput>
            <View style={styles.goalsContainer}>
                <FlatList 
                    alwaysBounceVertical={false}
                    data={goalsArray}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem data={itemData.item} ></GoalItem>
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                />
                        
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer:{
        flex: 10,
    }

});
