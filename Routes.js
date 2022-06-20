import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faShoppingBag, faAdjust, faCog, faComments, faCamera, faQuestion, faQuestionCircle, faBars, faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Home from './src/Pages/Home/Home';

function HomeScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home!</Text>
    // </View>
    <Home/>
  );
}

function PedidosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pedidos!</Text>
    </View>
  );
}

function CarrinhoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Carrinho!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configurações!</Text>
    </View>
  );
}

function AjudaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ajuda!</Text>
    </View>
  );
}

Icon.loadFont();

const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return <FontAwesomeIcon icon={ faHome } size={25} color={color}/>
            } else if (route.name === 'Pedidos') {
              return <FontAwesomeIcon icon={ faShoppingBag } size={25} color={color}/>
            } else if (route.name === 'Carrinho') {
              return <FontAwesomeIcon icon={ faShoppingCart } size={25} color={color}/>
            } else if (route.name === 'Configurações') {
              return <FontAwesomeIcon icon={ faCog } size={25} color={color}/>
            } else if (route.name === 'Ajuda') {
              return <FontAwesomeIcon icon={ faQuestionCircle } size={25} color={color}/>
            }

            // You can return any component that you like here!
            return <FontAwesomeIcon icon={ faBars } size={25} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#8C593B',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pedidos" component={PedidosScreen} />
        <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
        <Tab.Screen name="Ajuda" component={AjudaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}