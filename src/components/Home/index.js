import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, InputAccessoryView, ScrollView } from 'react-native';
import MainStyle from '../../style'
import { Content, } from 'native-base'
import { Auth } from 'aws-amplify';

class Home extends Component {
  render() {
    return (
      <Content >
        <View style={MainStyle.headerStyle}>
          <View style={{alignContent:'flex-start'}} >
            <Image
              source={require('../../assets/HomePage/logoo.png')}
            />
          </View>
          <View style={{alignSelf:'center'}} >
          <Image
              source={require('../../assets/HomePage/logo.png')}
            />
          </View>
          <View >
             
          </View>

        </View>


      </Content>
    )
  }
}
export default Home