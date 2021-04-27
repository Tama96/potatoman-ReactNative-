// import react is a must contains all react function, component etc
// component only return 1 induk use wrapper like <View>
import React, { Component } from 'react'; 
// to create text import this boi ;)
import {Image, ScrollView, Text, TextInput, View} from 'react-native';

// create component with functional component
// Arrow function
const App = () => {
  return (
    <View>
      <ScrollView>
        <View style={{width: 80, height: 80, backgroundColor: '#48dbfb'}} />
        <Text>Tama Tamvan</Text>
        <Tama/>
        <Text>Hei tayo</Text>
        <Photo />
        <TextInput style={{borderWidth: 1}}/>
        <BoxGreen />
        <Profile />
      </ScrollView>
    </View>
  );
};

// Another way to create function
// function App(){

// }

const Tama = () => {
  return <Text>Nur</Text>;
};

const Photo = () => {
  return ( 
    <Image 
      source={{uri: 'http://placeimg.com/100/100/tech'}} 
      style={{width: 100, height: 100}}
    />
  );
};
// export to make our app able to show in various platapofjdj

class BoxGreen extends Component{
  render (){
    return <Text>Component dari class</Text>;
  }
}

class Profile extends Component {
  render (){
    return (
      <View>  
        <Image source={{uri: 'http://placeimg.com/100/100/tech'}} 
        style={{width: 100, height: 100}} 
        />
        <Text style={{color: 'blue', fontSize: 50}}>Ini gambar</Text>
      </View>
    );
  }
}

export default App;