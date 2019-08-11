import React, { Component, PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import Frame from '../../components/Frame'
import Button from '../../components/Button'
import Color from '../../theme/Color';
import { FlatList } from 'react-native-gesture-handler'
import Routes from '../../navigation/Routes';

interface Props {
  navigation?: any
}

export default class JourneyScreen extends PureComponent<Props, any> {

  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    headerTintColor: Color.PRIMARY,
    headerStyle: {
      borderBottomWidth: 0,
      shadowColor: 'transparent',
    }
  }

  launchLoginScreen = () => {
    this.props.navigation.push(Routes.USER_LOGIN)
  }

  launchAccountCreationScreen = () => {
    this.props.navigation.push(Routes.USER_SIGNUP)
  }

  render() {
    return (
      <Frame padded>
        <Frame style={{ flex: 0.8 }}>
          <Button 
            onPress={this.launchLoginScreen}
            title='Log in' 
            titleStyle={{ color: Color.PRIMARY, fontSize: 16 }} 
            style={styles.btn}
          />
        </Frame>
        <Button
          title='Create Account' 
          primary style={{ marginBottom: 20 }} 
          onPress={this.launchAccountCreationScreen}
        />
        <Button 
          secondary
          title='Continue with Google'
        />
      </Frame>
    )
  }
}

const UserJourneyPager = () => (
  <FlatList />
)

const styles = StyleSheet.create({
  btn: {
    width: 50,
    marginTop: 28,
    alignSelf: 'flex-end' 
  }
})