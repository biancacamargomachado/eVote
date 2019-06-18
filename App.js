import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Inicio from './src/screens/Inicio';
import Historico from './src/screens/Historico';
import VisualizarQuestao from './src/screens/VisualizarQuestao';
import Sala from './src/screens/Sala';
import SalaContexto from './src/screens/SalaContexto';
import Questao from './src/screens/Questao';
import QuestaoContexto from './src/screens/QuestaoContexto';
import QuestaoSalva from './src/screens/QuestaoSalva';
import Convidados from './src/screens/Convidados';
import Andamento from './src/screens/Andamento';
import AndamentoVotos from './src/screens/AndamentoVotos';
import Votacao from './src/screens/Votacao';
import Votar from './src/screens/Votar';
import Login from './src/screens/Login';
import { app } from 'firebase';

const AppNavigator = createStackNavigator(
  {
    Login,
    Inicio,
    Historico,
    Sala,
    SalaContexto,
    Questao,
    QuestaoContexto,
    QuestaoSalva,
    Convidados,
    Andamento,
    AndamentoVotos,
    Votacao,
    VisualizarQuestao,
    Votar
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#8400C5',
      headerTitleContainerStyle: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#00C551',
      }
    },
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}