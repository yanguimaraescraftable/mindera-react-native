import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '../containers';
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components";
import { theme } from '../theme/theme';
import store, { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import ProfileScreen from '../containers/profile/profile';
import ChatScreen from '../containers/chat/chat';

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <StatusBar
                        animated={true}
                        backgroundColor="#ffc700"
                    />
                    <App/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}