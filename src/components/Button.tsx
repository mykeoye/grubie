import React from 'react'
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import Color from '../theme/Color';
import Label from './Label';
import TypoStyle from '../constants/TypoStyle'

interface Props {
  style?: any
  title: string
  titleStyle?: any
  primary?: boolean
  secondary?: boolean
  textWeight?: TypoStyle
  onPress?(event: GestureResponderEvent): void 
}

const Button = (props: Props) => {
  const backgroundColor = (props.primary && Color.PRIMARY) || (props.secondary && Color.SECONDARY) || Color.WHITE
  let textColor = (props.primary && Color.TEXT_PRIMARY) || (props.secondary && Color.TEXT_SECONDAY)
  console.log(`Text color is ${textColor}`)
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: backgroundColor }, props.style]} onPress={props.onPress}>
      <Label color={textColor} style={[{ fontFamily: props.textWeight }, props.titleStyle]}>{props.title}</Label>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
    borderRadius: 30,
  }
})

export default Button
