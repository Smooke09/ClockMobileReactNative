import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      button: 'Start',
      lastTimer: null,
    };

    //Variavel timer
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {
    if (this.timer != null) {
      //pausar timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: 'Start'});
    } else {
      //Inicica
      this.timer = setInterval(() => {
        this.setState({count: this.state.count + 0.1});
      }, 100);

      this.setState({button: 'Stop'});
    }
  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      lastTimer: this.state.count,
      count: 0,
      button: 'Start',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.clock} />

        <Text style={styles.timer}>{this.state.count.toFixed(2)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.start}>
            <Text style={styles.buttonText}>{this.state.button}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.clear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastTimer}>
          <Text style={styles.textLastTimer}>
            {this.state.lastTimer > 0
              ? 'Last Timer: ' + this.state.lastTimer.toFixed(2) + 's'
              : ''}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  lastTimer: {
    marginTop: 40,
  },
  textLastTimer: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default App;
