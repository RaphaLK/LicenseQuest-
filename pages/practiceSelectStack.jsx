import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Practice_Selections from './Practice_Selections.jsx'
import Facts_Quizzes from './Facts_Quizzes.jsx'
import Intro_1 from './Intro_1.jsx'
import Intro_2 from './Intro_2.jsx' 
import Intro_3 from './Intro_3.jsx'
import Map from './gmapview.jsx'

const PracticeSelectStack = () => {
  const Stack = createStackNavigator();
  return (
          <Stack.Navigator initialRouteName="PracticeSelect">
            <Stack.Screen name="Practice" component={Practice_Selections} />
            <Stack.Screen name="More Info" component={Facts_Quizzes} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Intro_2" component={Intro_2} />
            <Stack.Screen name="Intro_3" component={Intro_3} />
          </Stack.Navigator>
        );
      }



export default PracticeSelectStack