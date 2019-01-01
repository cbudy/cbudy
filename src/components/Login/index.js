import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, InputAccessoryView, ScrollView } from 'react-native';
import MainStyle from '../../style'
import { Content, } from 'native-base'

export default class Login extends Component {
  state = { username: '', password: '' };
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
                secureTextEntry={true}  
                placeholder=" Enter Password"
                placeholderTextColor="#adadac"
                inputAccessoryViewID={'password'}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
              <Text 
              onPress={() => this.props.navigation.navigate('signUp')}
              style={{
                paddingTop:5,
                padding: 10,
                paddingLeft: 30,
                color: '#2ecc71'
              }}> 
                Forgot Password ?
              </Text>
            </View>
            <View style={MainStyle.button}>
              <Text style={MainStyle.textFff} onPress={() => this.props.navigation.navigate('login')}>
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
