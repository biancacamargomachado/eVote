import React, { Component } from 'react';  
import { View, Image, TouchableOpacity,Text, StyleSheet } from 'react-native';
import { auth } from '../config';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import styles from '../styles/estilos';

export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          salas: {},
          email: 'dev@evote.com',
          senha: '123456',
          errorMessage:''
        }      
    }

    handleLogin = () => {
      const { email, senha } = this.state;
      auth
        .signInWithEmailAndPassword(email, senha)
        .then((data) => this.props.navigation.navigate('Inicio'))
        .catch(error => this.setState({ errorMessage: 'E-mail ou senha incorretos.' }));
    }

    static navigationOptions = {
        title: 'Bem-vind@ ao eVote!'
    };

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("../../assets/icon.png")} />
          </View>
          <View style={{flex: 1}}>
            <InputEmail 
              autoCorrect={false}
              label=" "
              keyboardType='email-address'
              returnKeyType="next"
              onChangeText={email => this.setState({ email })}
              value={this.state.email} 
              placeholder='E-mail'
            />

            <InputSenha
              label=" " 
              autoCorrect={false} 
              returnKeyType="go"
              placeholder='Senha'
              onChangeText={senha => this.setState({ senha })}
              value={this.state.senha}
            />

            <Text style={custom.notice}> 
              {this.state.errorMessage}
            </Text>

          </View>
          <View style={{flex: 2, backgroundColor: 'white'}}>
            <TouchableOpacity style={styles.loginButtonContainer} 
              onPress={() => {this.setState({ errorMessage: 'Por favor, aguarde.' }), this.handleLogin()}}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity> 
          </View>

        </View>
        );  
     }

}

const custom = StyleSheet.create({
  notice:{
    color: '#8400C5',
    textAlign: 'center'
  }
});