import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image , Button} from 'react-native';
import eeveelutions from './pokes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: eeveelutions['Shiny Mewtwo'],
      pokeName: 'Shiny Mewtwo'
    }
  }

  pokes = [
    "Jolteon",
    "Flareon",
    "Leafeon",
    "Glaceon",
    "Sylveon",
    "Espeon",
    "Umbreon",
    "Vaporeon",
    "Eevee",
    "Mewtwo",
    "Shiny Jolteon",
    "Shiny Vaporeon",
    "Shiny Flareon",
    "Shiny Glaceon",
    "Shiny Leafon",
    "Shiny Umbreon",
    "Shiny Espeon",
    "Shiny Eevee",
    "Shiny Sylveon",
    "Shiny Mewtwo"
  ]

  catchPoke = () => {
    const poke = this.pokes[Math.floor(Math.random()*this.pokes.length)]
    this.setState({pokemon: eeveelutions[poke], pokeName: poke});
  }

  render() {
    return (
      <ImageBackground 
        source={{uri: 'https://miniwallist.com/wp-content/uploads/2016/07/pokemon-go-pokeball-mobile-wallpaper-minimalist-preview.jpg'}}
        style={ styles.background }>
        <View style={ styles.container }>
          <Image source={this.state.pokemon}/>
          <Text style={{ color: 'lightblue' }}>Congratulations! You caught {this.state.pokeName}!</Text>
          <Button onPress={this.catchPoke} title="Catch a Pokemon!"/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: 400,
    height: 700
  }
});
