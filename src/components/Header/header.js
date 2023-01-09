import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { headerSheet } from '../styleSheet'

const header = () => {
  return (
    <View style={headerSheet.container}>
      <Text style={headerSheet.text}>Home</Text>
    </View>
  )
}

export default header

const styles = StyleSheet.create({})
