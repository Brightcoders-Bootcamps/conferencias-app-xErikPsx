import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text>LOGIN SCREEN</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
});

export default LoginScreen;
