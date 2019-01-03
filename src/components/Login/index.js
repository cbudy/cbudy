import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, InputAccessoryView, ScrollView } from 'react-native';
import MainStyle from '../../style'
import { Content, } from 'native-base'
import { Auth } from 'aws-amplify';
import {validateEmail , validatePassword} from '../Validate/component'



export default class Login extends Component {
  state = { username: '', password: '' };

  Login = () => { 
    Auth.signIn(this.state.username, this.state.password)
      .then(success => {
        console.log('successful sign in', success)
        this.props.navigation.navigate('home')
      })
      .catch(err => {
        console.log("error", err)
        alert(err.message)
      });
  }
  userGet = (data) => {
    // console.log(data)
    this.setState({
      username: data
    })
    validateEmail(data)
  }
  passGet = (val) => {
    this.setState({
      password: val
    })
    validatePassword(val)
  }
  emptyEmail=()=>{
    if(this.state.username=='')
{
  alert('empty field')
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
                onChangeText={this.userGet}
                value={this.state.username}
              
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
                onChangeText={this.passGet}
                value={this.state.password}
              />
              <Text
                onPress={() => this.props.navigation.navigate('signUp')}
                style={{
                  paddingTop: 5,
                  padding: 10,
                  paddingLeft: 30,
                  color: '#2ecc71'
                }}>
                Forgot Password ?
              </Text>
            </View>
            <View style={MainStyle.button}>
              <Text style={MainStyle.textFff} onPress={this.Login}>
                Login
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
      </Content>
    );
  }
}

const styles = StyleSheet.create({

});
