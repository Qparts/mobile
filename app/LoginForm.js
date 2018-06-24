import React, { Component } from 'react';
import {Card,CardItem,Input,Button,Spinner } from '../common'
import {Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {loginUser}from './actions';
const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red'
  },
  fbStyle:{
    marginTop: 20,
   },
  orStyle:{
    fontSize: 22,
    alignSelf:'center',
    color:'rgb(42, 55, 68)'
  }
});

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',

    };
    
  }
   
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Home');
    }
  }

 
  
 
  _onLoginPressed() {
    const { username, password } = this.state;
    this.props.loginUser({username,password})
  }

  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this._onLoginPressed.bind(this)}>Login</Button>
    );
  }

    render(){
        return (
          <Card>

          <CardItem>
            <Input
              label='Email'
              placeholder='Enter your email'
              secureTextEntry={false}
              onChangeText={(username) => this.setState({ username  }) }
            />
          </CardItem>
  
          <CardItem>
            <Input
              label='Password'
              placeholder='Enter your Password'
              secureTextEntry
              onChangeText={(password) => this.setState({ password }) }
            />
          </CardItem>
  
          <CardItem>
              { this._renderButton() }
          </CardItem>
          <Text style={styles.fbStyle}></Text>
          <Icon.Button   name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
           Login with Facebook
            </Icon.Button>
            
            <Text style={styles.orStyle}>OR Sign up</Text>
          
           <Icon.Button name="twitter" backgroundColor="#37d1fc" onPress={this.loginWithFacebook}>
           Login with Twitter
           </Icon.Button>
          <Text style={styles.errorStyle}>{this.props.error}</Text>
         </Card>
          );
      }
}
   
const mapStateToProps = state => {
  return {
    error:state.auth.error,
    loading:state.auth.loading,
    user:state.auth.user,
  }
}
export default connect(mapStateToProps,{loginUser})(LoginForm);