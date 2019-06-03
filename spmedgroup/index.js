/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/pages/login';

//import Navigator from "./src/index.js";

import Navigator from "./src";

import {name as appName} from './app.json';
//import Listar from './src/pages/listar_temas'; //colocada aqui para teste
//import Navigate from './src';

AppRegistry.registerComponent(appName, () => Navigator);

//Faz com que o Login seja a primeira página a aparecer quando o emulador é aberto.
//Talvez colocar Navigate em vez de Login