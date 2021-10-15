import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import PlanetHeader from '../components/PlanetHeader';

const Web = ({route}) => {
    const { url } = route.params;
    
    return (
       <SafeAreaView style={{flex : 1}}>
            <PlanetHeader backButton={ true }/>
            <WebView 
            style={{flex : 1}}
            source={{ uri: url }}
        />
        <StatusBar barStyle="light-content" />
       </SafeAreaView>

    )
}

export default Web
