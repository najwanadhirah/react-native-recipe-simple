import React, { Component } from "react";
import { ImageBackground, AppRegistry, TouchableOpacity, TextInput, StyleSheet, Text, View, Alert, } from "react-native";
import { Actions, ActionConst } from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";

export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  onClickListener = (id) => {

    if (this.state.email == "balmond@gmail.com") {

      if (!this.validateEmail(this.state.email)) {
        Alert.alert("E-mail address is not valid");
      }

      if (this.state.password == "1234") {
        Alert.alert("Success");
        Actions.Dashboard();
      }
      else {
        Alert.alert("Please enter password");
      }
    }
    else {
      Alert.alert("Please enter email");
    }
  }


  render() {

    return (

      <View style={styles.container}>

        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#54283A', '#3F1B28', '#35262B', '#7C364E']}
          style={styles.container}>

          <View style={{ flex: 1, alignItems: 'center', marginTop: "30%", }}>
            <Text style={styles.titletext}>Welcome Back !</Text>

            {/* <View style={styles.fill2}> */}
            <View style={styles.inputContainer2}>

              <TextInput style={styles.input2}
                placeholder="Email"
                placeholderTextColor="#fff"
                underlineColorAndroid='gray'
                theme={{ colors: { text: '#fff', primary: '#fff' } }}
                returnKeyType="next"
                autoCapitalize='none'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                keyboardType="email-address"
                autoCorrect={false} />
            </View>

            <View style={styles.inputContainer2}>

              <TextInput style={styles.input2}
                placeholder="Password"
                placeholderTextColor="#fff"
                underlineColorAndroid='gray'
                returnKeyType='go'
                secureTextEntry={true}
                autoCorrect={false}
                value={this.state.password}
                onChangeText={password => this.setState({ password })} />
            </View>
            {/* </View> */}

            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => {

                this.onClickListener();
                //   //Actions.project();
              }}
            >
              <LinearGradient colors={['#570D5A', '#9E4262']} style={styles.buttonContainer}>
                <Text style={styles.signUpText}>{this.props.type} Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>


            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: "6%" }}>
              <Text style={{
                color: '#a5a5a5',
                fontWeight: '500',
                fontSize: 13,
              }}>Don't have an account yet?</Text>

              <TouchableOpacity
                onPress={() => {
                  Alert.alert("Signup Page");

                }} >
                <Text style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 13,
                  textDecorationLine: 'underline',
                  marginLeft: 10
                }}>Sign Up</Text>
              </TouchableOpacity>

            </View>

          </View>
        </LinearGradient>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'white',

  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  titletext: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitletext: {
    textAlign: 'center',
    color: '#000',
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: "row",
    borderColor: '#a5a5a5',
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    width: "24%",
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  inputs: {
    height: 40,
    marginLeft: "19%",
    color: '#212121',
    flex: 1,
  },
  footerBottomSignUp1: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
  },
  logo: {
    width: 200,
    height: 70
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 5,
    marginLeft: 5,
    width: 300,
    marginTop: 20
  },
  signUpText: {
    fontSize: 12,
    fontWeight: "bold",
    color: 'white',
    marginBottom: 15,
    paddingTop: 10,
    top: 3
  },
  alignButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    flexDirection: 'column',
    marginTop: "5%",
  },
  fill: {
    width: "90%",
    marginTop: "1%",
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row'
  },
  fill2: {
    width: "90%",
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: "5%"
  },
  inputContainer2: {
    flexDirection: "row",
    // backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
    //paddingLeft: 10,
    // paddingRight: 10,

  },
  input2: {
    fontSize: 16,
    flex: 1,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 60,
    color: '#fff'
  },
  buttonTextIP: {
    marginLeft: 15,
    color: '#a5a5a5',
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  window: {
    marginBottom: 20
  },
  password: {
    marginTop: 100,
    alignItems: 'center',
  },

  st_signup: {
    color: 'white',
    fontWeight: '400',
  },
  st_inputfnt: {
    color: 'white',
  }, welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  paragraph: {
    textAlign: 'center',
    color: '#002f2f',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  Picker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footerBottomSignUp: {
    marginBottom: 60,
    alignItems: 'center',
  },
  footerBottomSignUp1: {
    marginBottom: 56,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText2: {
    textAlign: "left",
    color: '#AAADBC',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 50,

  },
  buttonText3: {
    textAlign: "left",
    color: '#AAADBC',
    fontSize: 40,
    marginBottom: 10,
    marginLeft: 20,

  },
});

AppRegistry.registerComponent('login', () => login);