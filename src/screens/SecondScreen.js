import React from 'react';
import {Text, View} from 'react-native';

const SecondScreen = ({navigation}) => {
  console.log('SecondScreen is rendered');
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        alignItems: 'flex-start',
      }}>
      <View style={{marginBottom: 10}} />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Random screen!</Text>
      <Text style={{fontSize: 17}}>
        When you go back now you will see position was changed!
      </Text>
      <View style={{marginBottom: 35}} />
      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
        Steps to reproduce:
      </Text>
      <Text style={{fontSize: 17}}>
        1. On first Screen, move any object just a little bit to any side.
      </Text>
      <Text style={{fontSize: 17}}>2. Change Screen</Text>
      <Text style={{fontSize: 17}}>
        3. Go back to HomeScreen and you will see position is changed!
      </Text>
      <View style={{marginBottom: 30}} />
      <Text style={{fontSize: 17, color: 'rgb(100, 100, 100)'}}>
        Note: You can also see debug log in console that translation value was
        changed.
      </Text>
      <View style={{marginBottom: 15}} />
      <Text style={{fontSize: 17, color: 'rgb(100, 100, 100)'}}>
        Note 2: When you remove diffClamp in 'components/Movable.js' and try to
        use just withOffset, you can see that everything works fine!
      </Text>
    </View>
  );
};

export default SecondScreen;
