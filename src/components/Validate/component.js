const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
state = {
  user: '',
  pass: '',
  emailprop: false,
  errorEmail: false,
  errorPass: '',
  isValid: ''
}

export const validateEmail = (data) => {
  console.log('ghh', validEmail.test(data))
  if (validEmail.test(data) == false) {
    console.log('Invalid Email Address');
    // this.setState({
    //     errorPass: 'invalid email',
    //     emailprop: true
    // })
    return false
  }
  else {
    console.log('valid Email Address');
    return true
  }
}
export const validatePassword = (data) => {
  if (validPassword.test(data) == false) {
    console.log('Invalid Password');
    return false;
  }
  else {
    console.log('valid Password');
    return true;
  }
}