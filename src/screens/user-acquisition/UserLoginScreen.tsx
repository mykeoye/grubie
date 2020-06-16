import React, { Component } from 'react'
import Color from '../../theme/Color'
import Frame from '../../components/Frame'
import { StyleSheet } from 'react-native'
import Label from '../../components/Label'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Link from '../../components/Link'
import Routes from '../../navigation/Routes'
import TypoStyle from '../../constants/TypoStyle'

interface Props {
  navigation?: any
}

export default class UserSignUpScreen extends Component<Props, any> {
  
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: Color.BLACK,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Color.SCREEN_BACKGROUND,
      shadowColor: 'transparent',
    }
  }

  openForgotPasswordScreen = () => {
    this.props.navigation.push(Routes.FORGOT_PASSWORD)
  }

  openAccountCreationScreen = () => {
    this.props.navigation.navigate(Routes.USER_SIGNUP)
  }
  
  render() {
    return (
      <Frame padded style={{ backgroundColor: Color.SCREEN_BACKGROUND }}>
        <Frame style={{ flex: 0.75 }}>
          <Label size={28} color={Color.PRIMARY} weight={TypoStyle.BOLD}>Log in to your</Label>
          <Label size={28} color={Color.PRIMARY} weight={TypoStyle.BOLD}>account</Label>

          <TextField 
            styles={[styles.txtFields, { marginTop: 60 }]} 
            placeholder='Email'
            keyboardType='email-address'
          />
          <TextField
            keyboardType='default'
            styles={styles.txtFields} 
            placeholder='Password'
            secureTextEntry
            rightElement={
              <Link 
                color={Color.PRIMARY}
                onPress={this.openForgotPasswordScreen}
                style={{ position: 'absolute', right: 20 }} 
                >
                  Forgot?
              </Link>
            }
          />
          <Button
            primary
            title='Log in' 
            style={{ marginTop: 25 }}
          />
          <Button
            secondary
            title='Log in with Google' 
            style={{ marginTop: 20 }}
          />
        </Frame>

        <Frame center style={{ flex: 0.25, flexDirection: 'row' }}>
          <Label weight={TypoStyle.BOLD}>Don't have an account?</Label>
          <Link  
            onPress={this.openAccountCreationScreen}
            color={Color.PRIMARY} 
            style={{ marginLeft: 8 }}>
              Sign up
          </Link>
        </Frame>
      </Frame>
    )
  }

}

const styles = StyleSheet.create({
  txtFields: {
    marginBottom: 12
  }
})