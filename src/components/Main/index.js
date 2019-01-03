import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MainStyle from '../../style'
import { Content, } from 'native-base'
import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-2:20a1b173-cc74-4f1e-8d21-486010304e05',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_MGpw3tXp9',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '7iko6svoouhfkplk4o50f1949v',
  }
});

export default class Main extends Component {
  state = {
    wait: true,
    popUp: false,
    route: ''
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
    }, 1000);
  }
  popUpMenu = (data) => {
    this.setState({
      popUp: true,
      route: data
    })
  }
  hide = () => {
    this.setState({
      popUp: false, 
    })
  }
  render() {
    return (
      this.state.wait ?
        <Image source={require('../../assets/Splash/SplashScreen.png')} /> :
        <Content contentContainerStyle={{ justifyContent: 'center' }}  >

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
              {this.state.popUp &&
                <View style={MainStyle.popUpBox}>
                  <View style={{ padding: 15 }}>
                    <Text style={MainStyle.popUpText}>
                      By clicking on 'okay' you agree to our Terms of Services and Privacy Setting
                </Text>
                  </View>
                  <View style={MainStyle.buttonInPopup}>
                    <View style={MainStyle.buttonOkay}>
                      {/* <Button> */}
                      <Text onPress={() => this.props.navigation.navigate(this.state.route)} style={{ textAlign: 'center' }}>Okay</Text>
                      {/* </Button> */}
                    </View>
                    <View style={MainStyle.buttonCancel}>
                      {/* <Button> */}
                      <Text onPress={this.hide} style={{ textAlign: 'center' }}>Cancel</Text>
                      {/* </Button> */}
                    </View>
                  </View>
                </View>}

            </View>
            <View style={MainStyle.columView}>
              <View style={MainStyle.buttonT}>
                <Text style={MainStyle.textGreen} onPress={() => this.popUpMenu("login")} >
                  Login
                </Text>
              </View>
              <View style={MainStyle.button}>
                <Text style={MainStyle.textFff} onPress={() => this.popUpMenu("signUp")}>
                  Sign up
                </Text>
              </View>
            </View>
            <View style={MainStyle.rowView}>
              <Button
                onPress={() => this.props.navigation.navigate('home')}
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
        </Content>
    );
  }
}

const styles = StyleSheet.create({

});