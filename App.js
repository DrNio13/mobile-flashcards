import React from 'react';
import { Button, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './components/DeckList';
import { createStore } from 'redux';
import DeckDetailsScreen from './components/DeckDetailsScreen';
import { HomeScreen } from './components/HomeScreen';
import AddCardScreen from './components/AddCardScreen';
import AddDeckScreen from './components/AddDeckScreen';
import StartQuizScreen from './components/StartQuizScreen';
import cardsApp from './reducers';
import AppNotification from './components/AppNotification';

const Stack = createStackNavigator();
const store = createStore(cardsApp);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DeckDetailsScreen" component={DeckDetailsScreen} />
            <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
            <Stack.Screen name="AddDeckScreen" component={AddDeckScreen} />
            <Stack.Screen name="StartQuizScreen" component={StartQuizScreen} />
          </Stack.Navigator>
          <AppNotification store={store} />
        </View>
      </NavigationContainer>
    </Provider>
  );
}