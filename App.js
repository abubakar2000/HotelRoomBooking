
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import DrawerApp from './routes/Drawer';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      <SafeAreaView style={[styles.SafeAppContainer]}>
        <DrawerApp />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%',
    paddingTop:0,
    backgroundColor:'#FA454B'
  },
  SafeAppContainer: {
    paddingTop:0,
    height: '100%',
    width: '100%',
  },
})