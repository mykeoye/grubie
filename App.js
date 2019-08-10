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
      [Typography.RUBIK_REGULAR]: require('./assets/fonts/Rubik-Regular.ttf'),
      [Typography.RUBIK_BOLD]: require('./assets/fonts/Rubik-Bold.ttf'),
      [Typography.RUBIK_BLACK]: require('./assets/fonts/Rubik-Black.ttf'),
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

