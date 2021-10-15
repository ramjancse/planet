// import { flatten, mergeAll } from 'ramda'
import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import { presets } from './text.preset'

const Text = ({children, preset = 'default', style}) => {
   
    // const styles = mergeAll(
    //     flatten([presets[preset] || presets.default, style])
    // )
    const textStyle = StyleSheet.compose(presets[preset] || presets.default, style )

    return (
            <RNText style={textStyle}> {children} </RNText>   
    )
}

export default Text
