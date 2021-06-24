import React, { Component } from 'react';
import {  StyleSheet} from 'react-native';
import { Router, Scene} from 'react-native-router-flux';
import Home from './pages/Home';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import recipeList from './pages/recipeList';
import ViewAll from './pages/ViewAllUser';
import Register from './pages/RegisterUser';
import Update from './pages/UpdateUser';
import Delete from './pages/DeleteUser';


export default class App extends Component {

  render() {

    return (

      <Router >
        <Scene key="root">
        <Scene key="Home"component={Home}  hideNavBar={true}/>
        <Scene key="login"component={Login}  hideNavBar={true}/>
        <Scene key="Dashboard"component={Dashboard}  hideNavBar={true}/>
        <Scene key="recipeList"component={recipeList}  hideNavBar={true}/>
        <Scene key="ViewAll"component={ViewAll}  hideNavBar={true}/>
        <Scene key="Register"component={Register}  hideNavBar={true}/>
        <Scene key="Update"component={Update}  hideNavBar={true}/>
        <Scene key="Delete"component={Delete}  hideNavBar={true}/>
      </Scene>

      </Router>
    )
  }
}

