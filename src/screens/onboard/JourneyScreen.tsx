import React, { Component, PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import Frame from '../../components/Frame'
import Label from '../../components/Label'
import Button from '../../components/Button'
import { FlatList } from 'react-native-gesture-handler';
import Color from '../../theme/Color';

export default class JourneyScreen extends PureComponent<any, any> {

  render() {
    return (
      <Frame padded>
        <Frame style={{ flex: 0.8 }}>
          <Button title='Log in' titleStyle={{ color: Color.PRIMARY }} style={{ width: 50, alignSelf: 'flex-end' }}/>
        </Frame>
        <Button title='Create Account' primary style={{ marginBottom: 20 }} />
        <Button title='Continue with Google' secondary />
      </Frame>
    )
  }
}

const UserJourneyPager = () => (
  <FlatList />
)

const styles = StyleSheet.create({
  b: {

  }
})