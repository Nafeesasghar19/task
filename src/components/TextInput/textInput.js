import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {inputFieldstyle} from '../styleSheet'
const textInput = ({ 
    value,
    onChangeText,
    
    placeholder

}) => {
    return (
        <View>
            <TextInput
            style={inputFieldstyle.container}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

export default textInput

const styles = StyleSheet.create({})