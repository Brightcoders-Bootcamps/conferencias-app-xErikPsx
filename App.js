/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.welcome} barStyle="light-content" />
      <Text style={styles.welcome}>App Conferencias.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },

  welcome: {
    color: 'red',
  },
});

export default App;
