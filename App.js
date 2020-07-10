import React, {Fragment, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
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
