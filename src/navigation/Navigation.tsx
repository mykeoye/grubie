import React, { Component } from 'react'
import Routes from './Routes'
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import HappyMealScreen from '../screens/onboard/HappyMealScreen'
import JourneyScreen from '../screens/onboard/JourneyScreen'

const UserJourneyStack = createStackNavigator({
  [Routes.USER_JOURNEY]: JourneyScreen
},
{
  initialRouteName: Routes.USER_JOURNEY,
  defaultNavigationOptions: {
    headerStyle: {
      height: 0,
      width: 0
    }
   }
})

const AppNavigation = createSwitchNavigator({
  [Routes.HAPPY_MEAL]: HappyMealScreen,
  [Routes.USER_JOURNEY]: UserJourneyStack
},{
  initialRouteName: Routes.HAPPY_MEAL
})

export default createAppContainer(AppNavigation)