import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anyagok from "./Anyagok";
import Kalkulator from "./Kalkulator";
import Itempicker from "./Teszt";

function CalcScreen({ navigation }) {
  return (
    <Kalkulator/>
  );
}

function MattersScreen({ navigation }) {
  return (
    <Anyagok/>
  );
}

function ItemsScreen({ navigation }) {
  return (
    <Itempicker/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tankok">
        <Drawer.Screen name="Felszerelés kalkulátor" component={CalcScreen} />
        <Drawer.Screen name="Tankok" component={MattersScreen} />
        <Drawer.Screen name="Felszerelés" component={ItemsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
