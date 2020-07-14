import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text style={styles.container}>LOGIN SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20',
  },
});

export default LoginScreen;
