import React from 'react'
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import Color from '../theme/Color';
import Label from './Label';
import TypoStyle from '../constants/TypoStyle'
import Dimen from '../theme/Dimen';

interface Props {
  style?: any
  title: string
  titleStyle?: any
  primary?: boolean
  shadow?: boolean
  secondary?: boolean
  textWeight?: TypoStyle
  onPress?(event: GestureResponderEvent): void 
}

const Button = (props: Props) => {
  const backgroundColor = (props.primary && Color.PRIMARY) || (props.secondary && Color.SECONDARY) || Color.WHITE
  let textColor = (props.primary && Color.TEXT_PRIMARY) || (props.secondary && Color.TEXT_SECONDAY)
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: backgroundColor }, props.shadow && styles.shadow, props.style]} onPress={props.onPress}>
      <Label color={textColor} style={[{ fontFamily: props.textWeight || TypoStyle.BOLD }, props.titleStyle]}>{props.title}</Label>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: Dimen.BUTTON_HEIGHT,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
    borderRadius: Dimen.BORDER_RADIUS,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
	    width: 0,
	    height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 3,
  }
})

export default Button
