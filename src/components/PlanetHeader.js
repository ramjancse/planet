import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors, spacing } from '../theme';
import Text from './text/text';

const styles = StyleSheet.create({
    container : {
        paddingLeft : spacing[6], 
        paddingVertical : spacing[4],
        borderBottomWidth : 0.5, 
        borderColor : colors.white, 
        flexDirection:'row', 
        alignItems:'center',
        backgroundColor : colors.black,
    }
    
})
const PlanetHeader = ({ backButton = false }) => {
   const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {backButton && 
               <TouchableOpacity onPress={ ()=> navigation.goBack() }> 
                    <AntDesign name="left" size={24} color={colors.gray} style={{ marginRight:spacing[4], marginTop : 3  }} /> 
               </TouchableOpacity>
            }
            <Text preset="h2"> THE PLANETS </Text>
        </View>
    )
}

export default PlanetHeader
