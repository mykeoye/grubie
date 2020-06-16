import React, { Children } from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
  style?: any
  center?: boolean
  bgColor?: string
  children?: any
  padded?: boolean
}

const Frame = (props: Props) => {
  const padding = props.padded && styles.padded
  return (
    <View style={[styles.frame,
      props.center && styles.center, padding, { backgroundColor: props.bgColor },
      props.style ]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1
  },
  padded: {
    padding: 30
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Frame
