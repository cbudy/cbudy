import { StyleSheet } from 'react-native';
import { vw, vh } from './shareComponents/dimensions'
const buttonWidth = vw - (vw / 8)
const green = '#2ecc71';
const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imgLogo: {
    marginBottom: 0,
    width: vw / 3,
    height: vw / 3,
    marginHorizontal: vw / 3.5,
  },
  textLogo: {
    marginTop: 0,
    marginBottom: 20,
    marginHorizontal: vw / 3.5,
    width: vw / 3,
  },
  HomeText: {
    width: vw / 1.5,
    zIndex: 11,
    marginHorizontal: vw / 8,
    marginBottom: 70
  },
  buttonT: {
    borderColor: green,
    padding: vh / 45,
    width: buttonWidth,
    borderWidth: 2,
    borderRadius: 50,
  },
  button: {
    marginTop: vh / 45,
    borderColor: green,
    backgroundColor: green,
    padding: vh / 45,
    width: buttonWidth,
    borderRadius: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  textGreen: {
    color: green,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "600"
  },
  textFff: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "600"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rowView: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  columView: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input:{

  }
});

export default MainStyle