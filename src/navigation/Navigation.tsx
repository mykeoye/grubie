import React, { Component } from 'react'
import Routes from './Routes'
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import HappyMealScreen from '../screens/onboard/HappyMealScreen'
import JourneyScreen from '../screens/onboard/JourneyScreen'
import UserLoginScreen from '../screens/user-acquisition/UserLoginScreen'
import ForgotPasswordScreen from '../screens/user-acquisition/ForgotPasswordScreen'
import AccountCreationScreen from '../screens/user-acquisition/AccountCreationScreen';

const UserJourneyStack = createStackNavigator({
  [Routes.USER_JOURNEY]: JourneyScreen,
  [Routes.USER_LOGIN]: UserLoginScreen,
  [Routes.USER_SIGNUP]: AccountCreationScreen,
  [Routes.FORGOT_PASSWORD]: ForgotPasswordScreen
},
{
  initialRouteName: Routes.USER_JOURNEY,
  defaultNavigationOptions: {
    
  }
})

const AppNavigation = createSwitchNavigator({
  [Routes.HAPPY_MEAL]: HappyMealScreen,
  [Routes.USER_JOURNEY]: UserJourneyStack
},
{
  initialRouteName: Routes.HAPPY_MEAL
})

export default createAppContainer(AppNavigation)