import React, { Component } from 'react';
import {Card,CardItem,Input,Button,Spinner } from '../common'
import {Text,View,Image, StyleSheet} from 'react-native';
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
    textAlign:'center', 
    fontWeight:'bold', 
    fontSize:18, 
    marginTop:0, 
    width:200, 
    }, 
    logoContainer: {
      justifyContent:'center', 
      alignItems:'center', 
      flex:1
    }, 
    logo: {
      width:66, 
      height:58, 
      borderRadius:50, 
  
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
    console.log(nextProps.user);
    if (nextProps.user) {
      this.props.navigation.navigate('Routes');
    }
  }

 
  _handleSignup() {
    this.props.navigation.navigate('signup'); 

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
                 <View style={styles.logoContainer}>
                   <Image
                    style={styles.logo}
                     source ={require('./Assets/img/avatar.png')}
                     /> 
                  </View>  
                  </CardItem>
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
          <CardItem>
         <Text style =  {styles.orStyle}onPress =  {this._handleSignup.bind(this)} > Sign up </Text >
        </CardItem > 
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