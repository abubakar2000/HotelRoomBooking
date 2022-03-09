
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import DrawerApp from './routes/Drawer';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      <View style={[styles.SafeAppContainer]}>
        <DrawerApp />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%',
    paddingTop:25
  },
  SafeAppContainer: {
    paddingTop:20,
    height: '100%',
    width: '100%',
  },
})