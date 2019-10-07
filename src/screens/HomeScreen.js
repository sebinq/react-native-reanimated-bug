import React from 'react';
import {Text, ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Movable from '../components/Movable';

const dimensions = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  console.log('HomeScreen is rendered');
  return (
    <ScrollView style={{flex: 1}}>
      <Movable
        boundaries={dimensions}
        containerStyle={styles.movable}
        initX={255}
        initY={90}>
        <View style={styles.redBox} />
      </Movable>
      <Movable
        boundaries={dimensions}
        containerStyle={styles.movable}
        initX={150}
        initY={255}>
        <View style={styles.greenBox} />
      </Movable>
      <TouchableOpacity
        onPress={() => navigation.navigate('Second')}
        style={styles.btn}>
        <Text>Move to next Screen!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movable: {
    ...StyleSheet.absoluteFillObject,
  },
  redBox: {
    width: 45,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  greenBox: {
    width: 52,
    height: 52,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: 'rgb(210, 210, 230)',
    left: 0,
    right: 0,
    width: dimensions.width,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;