/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

function DetailScreen({navigation}) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FD6572',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          style={styles.welcome}
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home',
            headerRight: () => (
              <Button
                onPress={() => alert('Testing button')}
                title="+"
                color="#ff3f4f"
              />
            ),
          }}
        />
        <Stack.Screen style={styles} name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },

  welcome: {
    color: 'pink',
  },
});

export default App;
