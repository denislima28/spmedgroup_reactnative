import React, { Component } from "react";


import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";


import api from "../services/api";
import Axios from 'axios';

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {email: "", senha: "" };
  }

  _realizarLogin = async () => {

    const resposta = await api.post("/login", {
      email: this.state.email,
      senha: this.state.senha
    })

    //Ativado caso as informações digitadas pelo usuário estejam erradas.
    .catch(() =>{
      alert('E-mail e/ou senha incorretos.');
          })

    const token = resposta.data.token;
    await AsyncStorage.setItem("userToken", token);
    this.props.navigation.navigate("MainNavigator");

  };

  render() {

    return (

      <View style={styles.main}>

        <TextInput
          style={styles.inputLogin}
          placeholder="EMAIL"
          placeholderTextColor="white"
          underlineColorAndroid="#FFFFFF"
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.inputLogin}
          placeholder="SENHA"
          placeholderTextColor="white"
          password="true"
          underlineColorAndroid="#FFFFFF"
          onChangeText={senha => this.setState({ senha })}
        />
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={this._realizarLogin}
        >
          <Text style={styles.btnLoginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(81, 39, 255, 0.79)"
  },
  main: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  mainImgLogin: {
    tintColor: "#FFFFFF",
    height: 100,
    width: 90,
    margin: 10
  },
  btnLogin: {
    height: 38,
    shadowColor: "rgba(0,0,0, 0.4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, // Android
    width: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF", //cor de fundo do botão de login
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnLoginText: {
    fontSize: 15,
    fontFamily: "OpenSans-Light",
    color: "black",
    letterSpacing: 4
  },
  inputLogin: {
    width: 240,
    marginBottom: 10,
    fontSize: 15
  }
});


export default Login;