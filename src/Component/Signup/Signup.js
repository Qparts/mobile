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
// import userControllers from "../../providers/controllers/UsersAPIControllers";
import I18n from '../../I18n';

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
      <Button onPress={this._onSignUpPressed.bind(this)}>{I18n.t('signup_handle_send_code')}</Button>
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
          emailError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_email_notVaild')}</Text>)
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
        re_passwordError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_pass_repass')}</Text>)
      });
      return false;
  }
    return true;
}
validation() {
  this.state.first_name === "" ? this.setState({
    first_nameError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_first_name')}</Text>)
    }) : this.setState({ first_nameError: null });
    this.state.last_name === "" ? this.setState({
    last_nameError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_last_name')}</Text>)
    }) : this.setState({ last_nameError: null });
    this.state.email === "" ? this.setState({
        emailError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_email')}</Text>)
    }) : this.setState({ emailError: null });
    this.state.password === "" ? this.setState({
        passwordError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_password')}</Text>)
    }) : this.setState({ passwordError: null });
    this.state.re_password === "" ? this.setState({
      re_passwordError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_repassword')}</Text>)
    }) : this.setState({ re_passwordError: null });
    this.state.phone_number === "" ? this.setState({
      phone_numberError: (<Text style={styles.errorStyle}>{I18n.t('signup_error_phone_no')}</Text>)
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
              label={I18n.t('signup_input_first_name_label')}
              placeholder={I18n.t('signup_input_first_name_placeholder')}
              secureTextEntry={false}
              onChangeText={(first_name) => {
                this.setState({ first_name: first_name });
                first_name === "" ? this.setState({
                  first_nameError: (
                        <Text  style={styles.errorStyle}> 
                                {I18n.t('signup_error_first_name')}</Text>)
                }) : this.setState({ first_nameError: null });

            }}

            /> 
            </CardItem>
            <Text style={styles.errorStyle}>{this.state.first_nameError}</Text>
            <CardItem>
            <Input
            label={I18n.t('signup_input_last_name_label')}
            placeholder={I18n.t('signup_input_last_name_placeholder')}
            secureTextEntry =  {false}
            onChangeText={(last_name) => {
              this.setState({ last_name: last_name });
              last_name === "" ? this.setState({
                last_nameError: (
                      <Text  style={styles.errorStyle}> 
                              {I18n.t('signup_error_last_name')}</Text>)
              }) : this.setState({ last_nameError: null });

          }}
            />
            </CardItem>
            <Text style={styles.errorStyle}>{this.state.last_nameError}</Text>
             <CardItem>
            <Input
            label= {I18n.t('signup_input_email_label')}
            placeholder= {I18n.t('signup_input_email_placeholder')}
            secureTextEntry={false}
            onChangeText={(email) => {
              this.setState({ email: email });
              email === "" ? this.setState({
                emailError: (
                      <Text  style={styles.errorStyle}> 
                               {I18n.t('signup_error_email')}</Text>)
              }) : this.setState({ emailError: null });

          }}
            />
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.emailError}</Text>
            <CardItem> 
            <View style={styles.inputContainer}>

             <Text style={styles.label}>{I18n.t('signup_input_country')}</Text>

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

          <Text style={styles.label}>{I18n.t('signup_input_phone_no_label')}</Text>

             <TextInput
             style={styles.input}
             placeholder={I18n.t('signup_input_phone_no_placeholder')}
             keyboardType={'phone-pad'}
             onChangeText={(phone_number) => {
             this.setState({ phone_number: phone_number });
                phone_number === "" ? this.setState({
                 phone_numberError: (
                     <Text  style={styles.errorStyle}> 
                   {I18n.t('signup_error_phone_no')}</Text>)
                }) : this.setState({ phone_numberError: null });

           }}/>
            </View>
            
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.phone_numberError}</Text>        
            <CardItem>
            <Input
            label={I18n.t('signup_input_password_label')}
            placeholder={I18n.t('signup_input_password_placeholder')}
            secureTextEntry={true}
            onChangeText={(password) => {
              this.setState({ password: password });
              password === "" ? this.setState({
                passwordError: (
                      <Text  style={styles.errorStyle}> 
                              {I18n.t('signup_error_password')}</Text>)
              }) : this.setState({ passwordError: null });

          }}
            />
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.passwordError}</Text>
           <CardItem>
            <Input
            label= {I18n.t('signup_input_re_password_label')}
            placeholder= {I18n.t('signup_input_re_password_placeholder')}
            secureTextEntry={true}
            onChangeText={(re_password) => {
              this.setState({ re_password: re_password });
              re_password === "" ? this.setState({
                re_passwordError: (
                      <Text  style={styles.errorStyle}> 
                       {I18n.t('signup_error_repassword')}</Text>)
              }) : this.setState({ re_passwordError: null });

          }}
            />
           </CardItem>
           <Text style={styles.errorStyle}>{this.state.re_passwordError}</Text>
             <CardItem>
              { this._handleRenderSignup() }
          </CardItem>
            <Icon.Button   name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}> 
            {I18n.t('signup_with_facebook')}
           </Icon.Button>
          <Icon.Button name="twitter" backgroundColor="#37d1fc" onPress={this.loginWithFacebook}> 
           {I18n.t('signup_with_twitter')}
            </Icon.Button>
          </Card > 
          </KeyboardAwareScrollView>

     ); 
  }
}

export default Signup;
 