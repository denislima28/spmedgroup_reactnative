import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
  } from "react-navigation";
  

  import Login from "./pages/login";
  import Listar from "./pages/listar";
  import NaoEncontrada from "./pages/naoencontrada";
  
  const AuthStack = createStackNavigator({ Login });
  
  
  const MainNavigator = createBottomTabNavigator(
    {
      //nome de uma página,
      Listar,
      NaoEncontrada
    },
    {
      initialRouteName: "Listar",
      swipeEnabled: true,
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        inactiveBackgroundColor: "#dd99ff",
        activeBackgroundColor: "#B727FF",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#FFFFFF",
        style: {
          height: 50
        }
      }
    }
  );
  
  //export default createAppContainer(MainNavigator);
  
  export default createAppContainer(
    createSwitchNavigator(
      {
        MainNavigator,
        AuthStack
      },
      {
        initialRouteName: "AuthStack"
      }
    )
  );
  