import React from 'react'
import Navigation from './src/navigation/Navigation'
import Typography from './src/constants/Typography'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

export default class App extends React.Component {
  
  state = {
    isLoadingComplete: false
  }

  loadResourcesAsync = async () => {
    await Font.loadAsync({
      [Typography.AIRBNB_CEREAL_REGULAR]: require('./assets/fonts/AirbnbCereal-Regular.ttf'),
      [Typography.AIRBNB_CEREAL_MEDIUM]: require('./assets/fonts/AirbnbCereal-Medium.ttf'),
    })
  }

  onError = (error) => {
    console.log(error)
  }

  onFinishedLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.onError}
          onFinish={this.onFinishedLoading}
        />
      )
    } else {
      return (
        <Navigation />
      )
    }
  }
}

