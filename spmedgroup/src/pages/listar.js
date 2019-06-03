import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';


class Listar extends Component {
  
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {lista_consultas: []};
  }
  
  _listarConsultas = async () => {

    const consultas = await api.get("/listar", {
      lista_consultas: this.state.lista_consultas
    })

    .catch(() =>{
      alert('E-mail e/ou senha incorretos.');
          })

    const token = consultas.data.token;
    await AsyncStorage.setItem("userToken", token);
    this.props.navigation.navigate("MainNavigator");

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LOGIN FEITO LOGIN FEITO</Text>       
      </View>

    //O CÓDIGO DA TABELA AINDA PRECISA DE AJUSTES. É POR ISSO QUE ESTÁ COMENTADO.  
    // <View style={styles.container}>
      //   <table id="lista_consulta">
      //       <FlatList>
      //             <tr>
      //             <th>#</th>
      //             <th>Data da Consulta</th>
      //             <th>Situação</th>
      //             <th>Descrição</th>
      //             <th>Médico</th>
      //             <th>Paciente</th>
      //             </tr> 
      //       </FlatList>

      //       <tbody id="tabela_lista_consultas">
      //         {
      //             this.state.lista_consultas.map(function(todas_consultas){
      //                 return(
      //                     <tr key={todas_consultas.id}>
      //                         <td>{todas_consultas.id}</td>
      //                         <td>{todas_consultas.dataConsulta}</td>
      //                         <td>{todas_consultas.situacao}</td>
      //                         <td>{todas_consultas.descricao}</td>
      //                         <td>{todas_consultas.idMedicoNavigation.nome}</td>
      //                         <td>{todas_consultas.idProntuarioPacienteNavigation.nome}</td>
      //                     </tr>
      //                 );
      //             })

      //         }
      //       </tbody>

      //   </table>

      // </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Listar;