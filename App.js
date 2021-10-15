import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Web from './src/screens/Web';
import { colors } from './src/theme';




const Stack = createNativeStackNavigator()
export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Spartan-Regular' : require('./assets/fonts/Spartan-Regular.ttf'),
    'Spartan-Bold' : require('./assets/fonts/Spartan-Bold.ttf'),
    'Antonio-Medium' : require('./assets/fonts/Antonio-Medium.ttf'),
  })
  
  if(!fontsLoaded){
    return <ActivityIndicator/>
  }else{
    return (
      <View style={{ flex: 1, backgroundColor: 'black'}}>
        <StatusBar backgroundColor= '#000000' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown : false}}/> 
            <Stack.Screen name="Details" component={Details} options={{headerShown : false}}/>
            <Stack.Screen name="Web" component={Web} options={{headerShown : false}}/>
          </Stack.Navigator>
          <StatusBar barStyle="light-content" />
        </NavigationContainer>
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
