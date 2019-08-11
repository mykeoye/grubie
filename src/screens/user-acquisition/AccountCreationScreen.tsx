import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Frame from '../../components/Frame'
import Color from '../../theme/Color'
import Link from '../../components/Link'
import Label from '../../components/Label'
import Button from '../../components/Button'
import Routes from '../../navigation/Routes'
import TextField from '../../components/TextField'
import TypoStyle from '../../constants/TypoStyle';

interface Props {
  navigation?: any
}

export default class AccountCreationScreen extends Component<Props, any> {
  
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: Color.BLACK,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Color.SCREEN_BACKGROUND,
      shadowColor: 'transparent',
    }
  }

  launchLoginScreen = () => {
    this.props.navigation.navigate(Routes.USER_LOGIN)
  }

  render() {
    return (
      <Frame padded style={{ backgroundColor: Color.SCREEN_BACKGROUND }}>
        <Frame style={{ flex: 0.75 }}>
          <Label size={28} color={Color.PRIMARY} weight={TypoStyle.BOLD}>Create your</Label>
          <Label size={28} color={Color.PRIMARY} weight={TypoStyle.BOLD}>account</Label>

          <TextField 
            styles={[styles.txtFields, { marginTop: 60 }]} 
            placeholder='Username'
            keyboardType='default'
          />
          <TextField 
            styles={[styles.txtFields]} 
            placeholder='Email'
            keyboardType='email-address'
          />
          <TextField
            keyboardType='default'
            styles={styles.txtFields} 
            placeholder='Password'
            secureTextEntry
          />
          <TextField 
            styles={[styles.txtFields]} 
            placeholder='Phone'
            keyboardType='phone-pad'
          />
          <Button
            primary 
            title='Continue' 
            style={{ marginTop: 25 }}
          />

          <Frame style={{ marginTop: 27 }}>
            <Label size={13} style={{ alignSelf: 'center', lineHeight: 22 }}>By clicking continue, you agree to all our</Label>
            <Link size={13} color={Color.PRIMARY} style={{ alignSelf: 'center' }}>Terms and Conditions</Link>
          </Frame>
        </Frame>

        <Frame center style={{ flex: 0.25, flexDirection: 'row' }}>
          <Label weight={TypoStyle.BOLD}>Already have account?</Label>
          <Link
            onPress={this.launchLoginScreen}
            color={Color.PRIMARY}
            weight={TypoStyle.BOLD}
            style={{ marginLeft: 8 }}>Log in</Link>
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