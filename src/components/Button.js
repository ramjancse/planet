import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from '../components/text/text';
import { colors, spacing } from '../theme';

const styles = StyleSheet.create({
    filterButton : {
        flex : 1,
        backgroundColor : colors.white,
        marginRight : spacing[2],
        borderRadius : spacing[4],
        paddingVertical : spacing[3],
        alignItems : 'center',
        justifyContent : 'center',       
    }
})
const Button = ({title, onPress}) => {
    return (
        <Pressable 
            style={styles.filterButton}
            onPress = {onPress}
        >
            <Text style={{textTransform : 'uppercase', color : colors.black}}>{title} </Text>
        </Pressable>
    )
}

export default Button
