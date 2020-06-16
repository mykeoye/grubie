import React, { Component } from 'react'
import Color from '../../theme/Color'
import { StyleSheet } from 'react-native'
import Frame from '../../components/Frame'
import Label from '../../components/Label'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import TypoStyle from '../../constants/TypoStyle'

interface Props {
  navigation?: any
}

export default class ForgotPasswordScreen extends Component<Props, any> {
  
  static navigationOptions = {
    headerTintColor: Color.BLACK,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Color.SCREEN_BACKGROUND,
      shadowColor: 'transparent',
    }
  }
  
  render() {
    return (
      <Frame padded style={{ backgroundColor: Color.SCREEN_BACKGROUND }}>
        <Frame style={{ flex: 0.75 }}>
          <Label size={28} color={Color.PRIMARY} weight={TypoStyle.BOLD}>Forgot password</Label>
          <Label
            size={16} 
            color={Color.TEXT_GRAY} 
            style={{ marginTop: 30 }}>
              Please enter your email to receive a link
          </Label>
          
          <Label 
            size={16} 
            color={Color.TEXT_GRAY}>
              to create a new passowd
          </Label>

          <TextField 
            styles={[styles.txtFields, { marginTop: 60 }]} 
            placeholder='Email'
            keyboardType='email-address'
          />
          <Button 
            primary 
            title='Send' 
            style={{ marginTop: 25 }}
          />
        </Frame>
      </Frame>
    )
  }

}

const styles = StyleSheet.create({
  txtFields: {
    marginTop: 20
  }
})