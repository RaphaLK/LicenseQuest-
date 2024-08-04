import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Facts_Quizzes from './Facts_Quizzes.jsx'
import Test from './Permit_Test.jsx'
import School from './drivers_ed.jsx'

const UsefulInfoStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Facts_Quizzes">
        <Stack.Screen name="Useful Info" component={Facts_Quizzes}/>
        <Stack.Screen name="Permit Test" component={Test}/>
        <Stack.Screen name="School" component={School}/>
      </Stack.Navigator>
    );
  }

  
export default UsefulInfoStack