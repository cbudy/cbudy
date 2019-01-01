import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MainStyle from '../../style'

export default class Main extends Component {
  state = {
    wait: true
  }
  gLogin = () => {

  }
  fbLogin = () => {

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        wait: false
      })
    }, 2000);
  }
  render() {
    return (
      this.state.wait ?
        <Image source={require('../../assets/Splash/SplashScreen.png')} /> :
        <View style={MainStyle.container}>
          <View style={MainStyle.columView}>
            <View>
              <Image
                style={MainStyle.imgLogo}
                source={require('../../assets/HomePage/logo3x.png')}
              />
            </View>
            <View>
              <Image
                style={MainStyle.textLogo}
                source={require('../../assets/MenuScreen/CBuDY.png')}
              />
            </View>
            <View>
              <Image
                style={MainStyle.HomeText}
                source={require('../../assets/MenuScreen/CbudyHomeText.png')}
              />
            </View>
          </View> 
          <View style={MainStyle.columView}>
            <View style={MainStyle.buttonT}>
              <Text style={MainStyle.textGreen} onPress={() => this.props.navigation.navigate('login')}>
                Login
            </Text>
            </View>
            <View style={MainStyle.button}>
              <Text style={MainStyle.textFff} onPress={() => this.props.navigation.navigate('signUp')}>
                Sign up
            </Text>
            </View>
          </View>
          <View style={MainStyle.rowView}>
            <Button
              onPress={this.fbLogin}
              style={{ height: 15, marginLift: 20 }}
              title="G"
              color="#2ecc71"
            />
            <Button
              onPress={this.gLogin}
              style={{ height: 15 }}
              title="F"
              color="#2ecc71"
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});