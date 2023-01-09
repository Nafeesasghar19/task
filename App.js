import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Home from './src/Screens/Home/home'
import Header from './src/components/Header/header'
import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/config/Index';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' />
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header headerTitle={"Home"} />
          <Home />
        </PersistGate>
      </Provider>

    </SafeAreaView>



  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})