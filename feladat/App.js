import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tankok from "./Tankok";
import Kalkulator from "./Kalkulator";
import Itempicker from "./Teszt";
import Harcosok from "./Fighters";
import Osszeshos from "./Allhero";

function BuildCalcScreen({ navigation }) {
  return (
    <Kalkulator/>
  );
}

function TankScreen({ navigation }) {
  return (
    <Tankok/>
  );
}

function ItemsScreen({ navigation }) {
  return (
    <Itempicker/>
  );
}

function FightersScreen({ navigation }) {
  return (
    <Harcosok/>
  );
}

function AllHeroScreen({ navigation }) {
  return (
    <Osszeshos/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Összes hős">
        <Drawer.Screen name="Összes hős" component={AllHeroScreen} />
        <Drawer.Screen name="Tankok" component={TankScreen} />
        <Drawer.Screen name="Harcosok" component={FightersScreen} />
        <Drawer.Screen name="Felszerelés" component={ItemsScreen} />
        <Drawer.Screen name="Felszerelés kalkulátor" component={BuildCalcScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
