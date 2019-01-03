import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, InputAccessoryView, ScrollView } from 'react-native';
import MainStyle from '../../style'
import { Content, } from 'native-base'
import { Auth } from 'aws-amplify';

export default class Signup extends Component {
  state = { username: '', password: '', email: '', rPassword: '', signup: '1', authCode: null };

  signUp = () => {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email
      }
    })
      .then(res => {
        console.log('successful signup: ', res)
        this.setState({
          signup: '2'
        })
      })
      .catch(err => {
        console.log('error signing up: ', err)
        if(err.message ){
          alert(err.message)
        }
        else{
          alert(err)
        }
        
      })
      this.emptyEmail()
  }
   
  confirmUser = () => {
    const { authCode } = this.state
    Auth.confirmSignUp(this.state.username, authCode)
      .then(res => {
        console.log('successful confirmation: ', res)
        this.setState({
          signup: '3'
        })
      })
      .catch(err => {
        console.log('error confirming user: ', err)
        alert(err.message)
      })
  }
  emptyEmail=()=>{
    if(this.state.email=='')
{
  alert('Email cannot be empty')
  return false;
} else{
  return true
} 
}
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
            {this.state.signup === '1' && <View>
              <TextInput
                style={{
                  borderWidth: 2,
                  paddingLeft: 15,
                  borderColor: '#adadac'
                }}
                placeholder=" Enter UserName"
                placeholderTextColor="#adadac"
                inputAccessoryViewID={'password'}
                onChangeText={(username) => this.setState({ username })}
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
                onBlur={this.emptyEmail}
              />
              <TextInput
                style={{
                  borderTopWidth: 0,
                  borderWidth: 2,
                  paddingLeft: 15,
                  borderColor: '#adadac'
                }}
                secureTextEntry={true}
                placeholder="Enter Password"
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
            }
            {this.state.signup === '1' && <View style={MainStyle.button}>
              <Text style={MainStyle.textFff} onPress={this.signUp}>
                Sign Up
              </Text>
            </View>}
            {this.state.signup === '2' && <TextInput
              style={{
                borderWidth: 2,
                paddingLeft: 15,
                borderColor: '#adadac'
              }}
              placeholder=" Enter comfirm code"
              placeholderTextColor="#adadac"
              inputAccessoryViewID={'password'}
              onChangeText={(authCode) => this.setState({ authCode })}
              value={this.state.authCode}
            />}
            {this.state.signup === '2' && <View style={MainStyle.button}>
              <Text style={MainStyle.textFff} onPress={this.confirmUser}>
                Confirm
              </Text>
            </View>}
            {
              this.state.signup === "3" && <View>
                <Text>
                  hello {this.state.username}
                </Text>
              </View>
            }
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({

});
