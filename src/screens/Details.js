import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/PlanetHeader';
import Text from '../components/text/text';
import { colors, spacing } from '../theme';

const styles = StyleSheet.create({
   description : {
       marginTop: spacing[5], 
       textAlign: 'center',
       lineHeight: spacing[6]
    },

    planetSection : {
        flexDirection :'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingHorizontal : spacing[5],
        paddingVertical : spacing[4],
        borderWidth : 1,
        borderColor: colors.gray,
        flex :1,
        marginVertical :spacing[5],
    },
    surfaceImage :{
        alignSelf:'center', 
        width : 150, 
        height: 150, 
        marginVertical: 
        spacing[5]
    },
    name : {
        textAlign:'center', 
        textTransform: 'uppercase'
    },
    wikiContent : {
        flexDirection:'row', 
        marginTop: spacing[5], 
        justifyContent: 'center'
    },
})

const PlanetSection = ({title, value}) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{textTransform: 'uppercase'}}>
                {title}
            </Text>
            <Text preset='h2'>
                {value}
            </Text>
        </View>
    )
}

const Details = ({ route, navigation }) => {
    const { planet } = route.params;
    const { surfaceImage, name, description, 
            wikiLink, rotationTime, revolutionTime,
            radius, avgTemp } = planet;
        
    console.log(planet)
    return (
        <SafeAreaView style={{backgroundColor : colors.black, flex : 1}}>
           <PlanetHeader backButton = {true} />
            <ScrollView>
                <View style={{padding: spacing[5]}}>
                    <Image source ={surfaceImage} style= {styles.surfaceImage} resizeMode="contain"/>
                    <View>
                        <Text preset='h1' style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </View>
                    <View style={styles.wikiContent}>
                        <Text> Source: </Text>
                        <Pressable onPress={()=> navigation.navigate('Web', {url :wikiLink } )  } style={{flexDirection:'row'}}>
                            <Text style={{ textDecorationLine: 'underline'}}> wikipedia</Text>
                            <Feather name="arrow-up-right" size={20} color="white" />
                        </Pressable>
                    </View>
                    
                        <PlanetSection title={'Rotation Time:'} value={rotationTime}/>
                        <PlanetSection title={'Revolution Time:'} value={revolutionTime}/>
                        <PlanetSection title={'Radious:'} value={radius}/>
                        <PlanetSection title={'AVG Temp:'} value={avgTemp}/>
                </View> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details
