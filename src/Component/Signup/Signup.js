import React,  {Component}from 'react'; 
import {
  Picker,
  Text,
  StyleSheet,
  TextInput,
  View
}from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {Card, CardItem, Input, Button, }from '../../common'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import userControllers from "../../providers/controllers/UsersAPIControllers";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center',
    height: 40
  },
  label: {
    fontSize: 16,
    paddingLeft: 10,
    flex: 1
  },
  input: {
    fontSize: 22,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    paddingBottom: 10,
   }, 
  errorStyle:{
    fontSize: 14,
    alignSelf: 'center',
    color: 'red'
  }
});

 class Signup extends Component {
  constructor() {
    super(); 
    this.state =  {
      first_name:'',
      first_nameError:'', 
      last_name:'',
      last_nameError:'', 
      email:'', 
      emailError:'',
      country_id:'', 
      phone_number:'',
      phone_numberError:'', 
      password:'',
      passwordError:'', 
      re_password:'',
      re_passwordError:'',
    }; 
    
  }

  _handleRenderSignup() {
    return (
      <Button onPress={this._onSignUpPressed.bind(this)}>Send Code</Button>
    );
  }
  _onSignUpPressed(){
    this.props.navigation.navigate('ConfirmCode', {
      code: 'asdasdas55656',
     });
  //  if(this.handleValidation()){
            
  //   let user = {
  //     first_name:this.state.first_name,
  //     last_name:this.state.last_name,
  //     email:this.state.email,
  //     country_id:this.state.country_id,
  //     phone_number:this.state.phone_number,
  //     password:this.state.password,
  //     re_password:this.state.re_password,
  //   }
  //      new userControllers().signup(user).then(res => {
  //       if(JSON.stringify(res)){
  //         this.props.navigation.navigate('ConfirmCode', {
  //           code: 'asdasdas55656',
  //          });
  //      }      
  //    }).catch(err => {
  //         if (err) {
  //      console.error(error)
  //       }
  //      });
  //  }
  }

  handleValidation() {
    this.validation();
    if (this.state.first_name === "") {
        return false;
    } else if (this.state.last_name === "") {
      return false;
  }
  else if (this.state.email === "") {
      return false;
  } else if (!this.validateEmail(this.state.email)) {
      this.setState({
          emailError: (<Text style={styles.errorStyle}>email Not Valid.</Text>)
      });
      return false;
  } else if (this.state.phone_number===""){
    return false;
  }
  else if (this.state.password === "") {
    return false;
} else if (this.state.re_password === "") {
    return false;
}else if (this.state.password != this.state.re_password) {
      this.setState({
        re_passwordError: (<Text style={styles.errorStyle}>Your password and confirmation password do not match .</Text>)
      });
      return false;
  }
    return true;
}
validation() {
  this.state.first_name === "" ? this.setState({
    first_nameError: (<Text style={styles.errorStyle}>First  Name required.</Text>)
    }) : this.setState({ first_nameError: null });
    this.state.last_name === "" ? this.setState({
    last_nameError: (<Text style={styles.errorStyle}>Last  Name required.</Text>)
    }) : this.setState({ last_nameError: null });
    this.state.email === "" ? this.setState({
        emailError: (<Text style={styles.errorStyle}>email is required.</Text>)
    }) : this.setState({ emailError: null });
    this.state.password === "" ? this.setState({
        passwordError: (<Text style={styles.errorStyle}>Password is required.</Text>)
    }) : this.setState({ passwordError: null });
    this.state.re_password === "" ? this.setState({
      re_passwordError: (<Text style={styles.errorStyle}>Confirm Password required.</Text>)
    }) : this.setState({ re_passwordError: null });
    this.state.phone_number === "" ? this.setState({
      phone_numberError: (<Text style={styles.errorStyle}>Phone Number is required.</Text>)
    }) : this.setState({ phone_numberError: null });
}
validateEmail(value) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

  render () {
    return (
      <KeyboardAwareScrollView>

              <Card>
              <CardItem>
              <Input
              label='First Name'
              placeholder='Enter your first name'
              secureTextEntry={false}
              onChangeText={(first_name) => {
                this.setState({ first_name: first_name });
                first_name === "" ? this.setState({
                  first_nameError: (
                        <Text  style={styles.errorStyle}>First Name is
                                required.</Text>)
                }) : this.setState({ first_nameError: null });

            }}

            /> 
            </CardItem>
            <Text style={styles.errorStyle}>{this.state.first_nameError}</Text>
            <CardItem>
            <Input
            label='Last Name'
            placeholder='Enter your last name'
            secureTextEntry =  {false}
            onChangeText={(last_name) => {
              this.setState({ last_name: last_name });
              last_name === "" ? this.setState({
                last_nameError: (
                      <Text  style={styles.errorStyle}>Last Name is
                              required.</Text>)
              }) : this.setState({ last_nameError: null });

          }}
            />
            </CardItem>
            <Text style={styles.errorStyle}>{this.state.last_nameError}</Text>
             <CardItem>
            <Input
            label='Email'
            placeholder='Enter your email'
            secureTextEntry={false}
            onChangeText={(email) => {
              this.setState({ email: email });
              email === "" ? this.setState({
                emailError: (
                      <Text  style={styles.errorStyle}>email is
                              required.</Text>)
              }) : this.setState({ emailError: null });

          }}
            />
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.emailError}</Text>
            <CardItem> 
            <View style={styles.inputContainer}>

             <Text style={styles.label}>Country</Text>

            <Picker
             style={styles.input}
            selectedValue={this.state.country_id}
            style={{height:100, width:100 }}
            onValueChange={(itemValue, itemIndex) => this.setState( {country_id:itemValue})}>
            <Picker.Item label="السعودية"value = "java"/>
            <Picker.Item label="الاردن"value = "js"/>
            </Picker>
            </View>  
            </CardItem>
            <CardItem>
            <View style={styles.inputContainer}>

          <Text style={styles.label}>Phone Number</Text>

             <TextInput
             style={styles.input}
             placeholder='Enter your Phone'
             keyboardType={'phone-pad'}
             onChangeText={(phone_number) => {
             this.setState({ phone_number: phone_number });
                phone_number === "" ? this.setState({
                 phone_numberError: (
                     <Text  style={styles.errorStyle}>Phone Number is
                    required.</Text>)
                }) : this.setState({ phone_numberError: null });

           }}/>
            </View>
            
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.phone_numberError}</Text>        
            <CardItem>
            <Input
            label='Password'
            placeholder='Enter your Password'
            secureTextEntry={true}
            onChangeText={(password) => {
              this.setState({ password: password });
              password === "" ? this.setState({
                passwordError: (
                      <Text  style={styles.errorStyle}>Password  is
                              required.</Text>)
              }) : this.setState({ passwordError: null });

          }}
            />
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.passwordError}</Text>
           <CardItem>
            <Input
            label='Re-type Passwrod'
            placeholder='Re-type Passwrod '
            secureTextEntry={true}
            onChangeText={(re_password) => {
              this.setState({ re_password: re_password });
              re_password === "" ? this.setState({
                re_passwordError: (
                      <Text  style={styles.errorStyle}>Confirm Password is
                      required.</Text>)
              }) : this.setState({ re_passwordError: null });

          }}
            />
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.re_passwordError}</Text>
             <CardItem>
              { this._handleRenderSignup() }
          </CardItem>
            <Icon.Button   name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}> 
           Login with Facebook
          </Icon.Button>
          <Icon.Button name="twitter" backgroundColor="#37d1fc" onPress={this.loginWithFacebook}> 
           Login with Twitter </Icon.Button>
          </Card > 
          </KeyboardAwareScrollView>

     ); 
  }
}

export default Signup;
 