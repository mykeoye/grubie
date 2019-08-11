import React, { Component } from 'react'
import { View, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native'
import Dimen from '../theme/Dimen'
import Color from '../theme/Color'
import TypoStyle from '../constants/TypoStyle';

interface Props {
  styles?: any
  rightElement?: any
  placeholder: string
  defaultValue?: string
  autoCorrect?: boolean
  secureTextEntry?: boolean
  onTextChange?(text: string): void
  keyboardType: KeyboardTypeOptions
}

export default class TextField extends Component<Props, any> {

  render() {
    const { keyboardType, placeholder, autoCorrect, secureTextEntry, rightElement } = this.props
    return (
      <View style={[styles.txtField, this.props.styles]}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
        />
        {rightElement}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txtField: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: Dimen.BUTTON_HEIGHT,
    backgroundColor: Color.WHITE,
    borderRadius: Dimen.BORDER_RADIUS
  },
  textInput: {
    alignSelf: 'stretch',
    fontFamily: TypoStyle.REGULAR as any
  }
})