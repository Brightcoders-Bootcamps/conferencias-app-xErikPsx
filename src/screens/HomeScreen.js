import React from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';

function HomeScreen(navigation) {
  return (
    <View>
      <StatusBar style={styles.welcome} barStyle="light-content" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Text style={styles.welcome}>App Conferencias Navigation.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default HomeScreen;
