/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native';

class App extends Component {

  state = {
    user01: 0,
    victories01: 0,
    user02: 0,
    victories02: 0
  };

  //Acrescentar pontuação para jogador 01.
  changeUser01More(count) {

    this.setState({
      user01: count + 1
    });

    var victories = this.state.victories01 + 1;

    if(this.state.user01 == 12) {
      this.setState({
        user02: 0,
        user01: 0,
        victories01: victories
      });
    }
  }

  //Acrescentar pontuação para jogador 02.
  changeUser02More(count) {

    this.setState({
      user02: count + 1
    });

    var victories = this.state.victories02 + 1;

    if(this.state.user02 == 12) {
      this.setState({
        user02: 0,
        user01: 0,
        victories02: victories
      });
    }
  }

  //Decrementar pontução para jogador 01.
  changeUser01Less(count) {
    if (count > 0) {
      this.setState({
        user01: count - 1
      });
    }
  }

  //Decrementar pontução para jogador 02.
  changeUser02Less(count) {
    if (count > 0) {
      this.setState({
        user02: count - 1
      });
    }
  }

  //Zerar as pontuações.
  reset() {
    this.setState({
      user02: 0,
      user01: 0,
      victories02: 0,
      victories01: 0
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <Image source={require('./assets/bg.png')} style={styles.backgroundImage} />
          <Text style={{ marginTop: 100, fontSize: 30, color: '#FFF' }}>Marcador de truco</Text>
          <View style={{ width: '30%', marginTop: 7, backgroundColor: '#FFF', height: 1.5 }}></View>
        </View>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontSize: 16 }}>Equipe verde</Text>
              <Text style={{ marginTop: -10, fontSize: 150, color: '#FFF', fontWeight: 'bold' }}>{this.state.user01}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight onPress={() => this.changeUser01Less(this.state.user01)} underlayColor="transparent">
                  <Image source={require('./assets/button2.fw.png')} style={{ width: 50, height: 50 }} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.changeUser01More(this.state.user01)} underlayColor="transparent">
                  <Image source={require('./assets/button1.fw.png')} style={{ width: 50, height: 50, marginLeft: 10 }} />
                </TouchableHighlight>
              </View>
              <Text style={{ marginTop: 20, color: '#FFF' }}>Vitórias</Text>
              <Text style={{ marginTop: 0, color: '#FFF', fontWeight: 'bold', fontSize: 40 }}>{this.state.victories01}</Text>
            </View>
            <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontSize: 16 }}>Equipe azul</Text>
              <Text style={{ marginTop: -10, fontSize: 150, color: '#FFF', fontWeight: 'bold' }}>{this.state.user02}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight onPress={() => this.changeUser02Less(this.state.user02)} underlayColor="transparent">
                  <Image source={require('./assets/button2.fw.png')} style={{ width: 50, height: 50 }} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.changeUser02More(this.state.user02)} underlayColor="transparent">
                  <Image source={require('./assets/button1.fw.png')} style={{ width: 50, height: 50, marginLeft: 10 }} />
                </TouchableHighlight>
              </View>
              <Text style={{ marginTop: 20, color: '#FFF' }}>Vitórias</Text>
              <Text style={{ marginTop: 0, color: '#FFF', fontWeight: 'bold', fontSize: 40 }}>{this.state.victories02}</Text>
            </View>
          </View>
          <TouchableHighlight onPress={() => this.reset(this.state.user02)} underlayColor="transparent" style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20}}>
            <View style={{padding: 6, backgroundColor: '#FFF', width: '20%', borderRadius: 20}}>
              <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 2, color: '#267159'}}>reset</Text>
            </View>
          </TouchableHighlight>
          <Text style={{color: '#FFF', textAlign: 'center', marginTop: 50, fontSize: 9}}>Desenvolvido por Jonathan Barbosa.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'stretch',
    width: '100%',
    height: 1000,
    zIndex: -10000
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 100,
    zIndex: 1000,

  },
});

export default App;