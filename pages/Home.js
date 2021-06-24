import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#54283A', '#3F1B28', '#35262B', '#7C364E']}
                style={styles.container}>

          <ImageBackground
            source={require("../pages/recipe1.png")}
            style={styles.image}>
            <View style={styles.cardLisiting}>
              <Text style={styles.text}>
               Find Your 
                {"\n"}
               Favourite Recipes
                </Text>

              <Text style={styles.textStyles}>
                Easy Way 
                {"\n"}
                to learn cooking with Professional Chef
              </Text>

              <TouchableOpacity onPress={() => {
              //this.onClickListener();
              Actions.login();
            }}>
                <LinearGradient colors={['#570D5A', '#9E4262']} style={styles.buttonContainer}>
                  <Text style={styles.input}>Get Started</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#202021',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    height: 170,
    marginTop: 90,
    marginLeft: 50
  },
  textStyles: {
    fontFamily: "Helvetica",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 22.4,
    color: "grey",
    marginTop: 40,
    marginLeft: 60
  },
  input: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'white',
    marginBottom: 15,
    paddingTop: 10
  },
  buttonContainer: {
    height: 50,
    alignItems: 'center',
    width: 200,
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 140
  },
  cardLisiting: {
    width: "135%",
    height: "70%",
    borderRadius: 30,
    backgroundColor: "white",
    marginLeft: -46,
    marginRight: -30,
    marginTop: 300
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 50,
    fontFamily: "Helvetica",
  }
});