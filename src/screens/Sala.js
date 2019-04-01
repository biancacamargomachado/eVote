import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Aviso from '../components/Aviso';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';
import MyDatePicker from '../components/datainput';

export default class Sala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: "",
      titulo: "",
      descricaoLimite: false,
      erroTitulo: "",
      erroDescricao: ""
    };
  }
  static navigationOptions = {
    title: 'Criação de Sala',
  };

  handleTitle = (value) => {
    this.setState({erroTitulo: ""});
    this.setState({titulo: value})
  }

  handleDescription = (value) => {
    this.setState({erroDescricao: ""});
    if(value.length >= 10)
      this.setState({descricaoLimite: true})
    else
      this.setState({descricaoLimite: false})

      this.setState({descricao: value})
  }

  handleSubmit = () => {
    this.validate();
  }

  validate = () => {
    if(this.state.titulo.length > 0) {
      if(this.state.descricao.length > 0) {
        if(this.state.erroDescricao)
          return this.setState({erroDescricao: ""});

        this.props.navigation.navigate('SalaContexto');
      } else {
        return this.setState({erroDescricao: "Insira uma descrição"});
      }

      if(this.state.erroTitulo)
        return this.setState({erroTitulo: ""});
    }else {
      return this.setState({erroTitulo: "Insira um título"});
    }
  }

  render() {
    const { descricao, titulo, descricaoLimite, erroTitulo, erroDescricao } = this.state;
    return (

      <View style={styles.container}>

        <View>
          <InputTexto
            error={!!erroTitulo}
            label="Título"
            onChangeText={value => this.handleTitle(value)}
            value={titulo}
          />
          {!!erroTitulo && <Aviso texto={erroTitulo} />}
          
          <View>
              <MyDatePicker titulo={"Data de Inicio" }/>

              <MyDatePicker titulo={"Data de Fim" }/>
          </View>

          <InputTexto
            error={!!erroDescricao}
            label="Descrição"
            max={10}
            onChangeText={value => this.handleDescription(value)}
            value={descricao}
          />
          {descricaoLimite && <Text>Limite de caracteres atingido na descrição!</Text>}
          {!!erroDescricao && <Aviso texto={erroDescricao} />}
        </View>

        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Inicio' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='SalaContexto'
            style={styles.icon} 
            onPress={() => this.handleSubmit()}
          />

        </View>
      </View>
    )
  }
}