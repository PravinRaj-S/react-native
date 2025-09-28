import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <SafeAreaProvider>
                <StatusBar style="light" />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#351401',
                            },
                            headerTintColor: 'white',
                            contentStyle: { backgroundColor: '#3f2f25' },
                            headerStatusBarHeight:
                                Platform.OS === 'android' ? StatusBar.currentHeight : undefined,
                        }}
                    >
                        <Stack.Screen
                            name="Meals Category"
                            component={CategoriesScreen}
                            options={{
                                title: 'All Categories',
                            }}
                        />
                        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
                        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
