import React, { PureComponent } from 'react'
import Frame from '../../components/Frame'
import Color from '../../theme/Color'
import Button from '../../components/Button'
import Label from '../../components/Label'
import { View, StyleSheet, ImageBackground } from 'react-native'
import Routes from '../../navigation/Routes'

interface Props {
  navigation?: any
}

export default class HappyMealScreen extends PureComponent<Props, any> {

  routeToJourneyScreen = () => {
    this.props.navigation.navigate(Routes.USER_JOURNEY)
  }

  render() {
    return (
      <Frame style={{ backgroundColor: Color.SECONDARY }}>
        <GrubyImageFrame launchJourneyScreen={this.routeToJourneyScreen} />
      </Frame>
    )
  }
}

const GrubyImageFrame = ({ launchJourneyScreen }: any) => (
  <ImageBackground source={require('../../../assets/images/cheeze.jpg')} style={styles.grubImageFrame}>
    <AboutFrame launchJourneyScreen={launchJourneyScreen} />
  </ImageBackground>
)

const AboutFrame = ({ launchJourneyScreen }: any) => (
  <Frame style={styles.aboutFrame} bgColor={Color.PRIMARY}>
    <Label size={36} color={Color.TEXT_PRIMARY}>Happy Meals</Label>
    <View style={{ marginVertical: 10 }}>
      <Label size={16} color={Color.TEXT_PRIMARY} style={{ marginTop: 8 }}>Discover the best foods from</Label>
      <Label size={16} color={Color.TEXT_PRIMARY} style={{  marginBottom: 8 }}>over 1,000 restaurants.</Label>
    </View>
    <Button
      title='Get Started'
      style={{ width: 190 }}
      onPress={launchJourneyScreen}
    />
  </Frame>
)

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grubImageFrame: {
    flex: 1, 
    backgroundColor: Color.SECONDARY, 
    justifyContent: 'flex-end'
  },
  aboutFrame: {
    flex: 0.3, 
    padding: 25, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30
  },
  discoverLabels: {
    marginTop: 8
  }
})