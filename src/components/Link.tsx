import React from 'react'
import Label, { Props as LabelProps } from './Label'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'

interface Props extends LabelProps {
  onPress?(event: GestureResponderEvent): void 
}

export const Link = (props: Props) => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <Label
      weight={props.weight} 
      size={props.size} 
      color={props.color}>
        {props.children}
    </Label>
  </TouchableOpacity>
)

export default Link
