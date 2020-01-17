import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import Movable from '../components/Movable';

const dimensions = Dimensions.get('screen');

const HomeScreen = () => {
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
