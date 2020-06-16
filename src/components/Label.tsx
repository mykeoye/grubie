import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Typography from '../constants/Typography'
import TypoStyle from '../constants/TypoStyle';

export interface Props {
  style?: any
  size?: number
  color?: any
  children?: any
  weight?: TypoStyle
}

const Label = (props: Props) => (
  <Text style={[styles.def, 
    { fontSize: props.size, 
      color: props.color, 
      fontFamily: props.weight || TypoStyle.REGULAR }, 
      props.style
    ]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  def: {
    fontSize: 16,
    fontFamily: Typography.AIRBNB_CEREAL_MEDIUM
  }
})

export default Label
