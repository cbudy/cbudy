import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, InputAccessoryView, ScrollView } from 'react-native';
import MainStyle from '../../style'
import { Content, } from 'native-base'
export default class Signup extends Component {
  state = { username: '', password: '', email: '', rPassword: '' };
  gLogin = () => {

  }
  fbLogin = () => {

  }
  render() {
    return (
      <Content contentContainerStyle={{ justifyContent: 'center' }}  >
        <View >
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
            <View>
              <TextInput
                style={{
                  borderWidth: 2,
                  paddingLeft: 15,
                  borderColor: '#adadac'
                }}
                placeholder=" Enter UserName"
                placeholderTextColor="#adadac"
                inputAccessoryViewID={'password'}
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
              <TextInput
                style={{
                  borderTopWidth: 0,
                  borderWidth: 2,
                  paddingLeft: 15,
                  borderColor: '#adadac'
                }}
                placeholder=" Enter email"
                placeholderTextColor="#adadac"
                inputAccessoryViewID={'password'}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
              <TextInput
                style={{
                  borderTopWidth: 0,
                  borderWidth: 2,
                  paddingLeft: 15,
                  borderColor: '#adadac'
                }}
                secureTextEntry={true}  
                placeholder=" Enter Password"
                placeholderTextColor="#adadac"
                inputAccessoryViewID={'password'}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
              <TextInput
                style={{
                  borderTopWidth: 0,
                  borderWidth: 2,
                  paddingLeft: 15,
                  borderColor: '#adadac'
                }}
                secureTextEntry={true}  
                placeholder=" Enter Repeat Password"
                placeholderTextColor="#adadac"
                inputAccessoryViewID={'password'}
                onChangeText={rPassword => this.setState({ rPassword })}
                value={this.state.rPassword}
              />
            </View>
            <View style={MainStyle.button}>
              <Text style={MainStyle.textFff} onPress={() => this.props.navigation.navigate('login')}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({

});
