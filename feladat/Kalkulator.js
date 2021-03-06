import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';

const CONFIG = require('./config.js');

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', anyag:[]};
  }
  state = {
    hosszusag: '',
    magassag: '',
    szelesseg: '',
    ered: '',
 }
  magassagkezel = (text) => {
  this.setState({ magassag: text })
}
  szelessegkezel = (text) => {
  this.setState({ szelesseg: text })
}
 hosszusagkezel = (text) => {
  this.setState({ hosszusag: text })
}
  szamitas = (hosszusag, szelesseg, magassag) =>{
    var eredmeny = parseInt(hosszusag)*parseInt(szelesseg)*parseInt(magassag);
    this.setState({ered: eredmeny})
  }

  componentDidMount(){
    return fetch('http://'+CONFIG.IP+':'+CONFIG.PORT+'/osszestargy')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
          anyag: [],
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

}

  render() {
    return (
      <View style={{padding: 20, marginLeft:"auto", marginRight: "auto", borderRadius: 15, borderColor: "blue", borderWidth: 5, marginTop: 20, minWidth: 450, minHeight: 450}}>
        <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, textDecorationLine:"underline", textTransform:"uppercase"}}>Felszerelés költség kiszámítása:</Text>
        
        <View style={{minHeight: 200, minWidth: 400, marginLeft:"auto", marginRight: "auto"}}>
        
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 ,  fontSize: 25}}>
          Felszerelés fajtája: 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginRight: "auto", textAlign:"center", fontSize: 20}}
      onChangeText={this.magassagkezel}
      value={this.state.magassag}
        />
        </View>
        
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10, marginBottom: 5 , fontSize: 25}}>
          Felszerelés neve: 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginRight: "auto", textAlign:"center", fontSize: 20}}
      onChangeText={this.szelessegkezel}
        />
        </View>
        
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 , fontSize: 25}}>
          Hosszúság (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginRight: "auto", textAlign:"center",  fontSize: 20 }}
      onChangeText={this.hosszusagkezel}
        />
        </View>
        
        </View>
        
        <View style={{marginLeft:"auto", marginRight: "auto", flex: 1, flexDirection: "row"}}>
        <TouchableOpacity style={{marginTop: 15, fontSize: 25, backgroundColor: "blue", borderRadius: 25, width: 200, height: 80, padding: 20}}
        onPress={()=> this.szamitas(this.state.magassag, this.state.szelesseg, this.state.hosszusag)}>
         <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 25}}> Számítás </Text>
       </TouchableOpacity>
       <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 40, marginLeft: 20}}>Eredmény: </Text>
       <Text style={{fontSize: 20,  marginTop: 40,}}>{this.state.ered}</Text>
       <Text style={{fontSize: 20, marginTop: 40,marginLeft: 2}}>m</Text>
       <Text style={{fontSize:10, marginTop: 40,lineHeight: 20}}>3</Text>
      </View>

      <View style={styles.container}>
      <Text style={styles.paragraph}>
      React native dropdown picker
       </Text>
      <DropDownPicker
      items={[
        {label: 'English', value: 'en'},
        {label: 'Deutsch', value: 'de'},
        {label: 'French', value: 'fr'},
    ]}
    defaultIndex={0}
    containerStyle={{height: 40}}
    onChangeItem={item => console.log(item.label, item.value)}
  />
  </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});