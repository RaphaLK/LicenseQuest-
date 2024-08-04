import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import selectDMV from './SelectDMV.jsx'
import Map from './gmapview.jsx'


const DMVStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="selectDMV">
        <Stack.Screen name="DMV Selection" component={selectDMV}/>
        <Stack.Screen name="Map" component={Map}/>
      </Stack.Navigator>
    );
  }

  
export default DMVStack