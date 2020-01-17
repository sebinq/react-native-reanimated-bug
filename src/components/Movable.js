import React from 'react';
import {onGestureEvent, withOffset} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {memoize} from '../utils';

const {Value, diffClamp} = Animated;

const Movable = ({initX, initY, boundaries, containerStyle, children}) => {
  const state = memoize(new Value(State.UNDETERMINED));
  const translationX = memoize(new Value(0));
  const translationY = memoize(new Value(0));
  const offsetX = memoize(new Value(initX));
  const offsetY = memoize(new Value(initY));

  const gestureEvent = onGestureEvent({
    state,
    translationX,
    translationY,
  });

  const translateX = diffClamp(
    withOffset(translationX, state, offsetX),
    0,
    boundaries.width,
  );

  const translateY = diffClamp(
    withOffset(translationY, state, offsetY),
    0,
    boundaries.height,
  );

  return (
    <PanGestureHandler {...gestureEvent}>
      <Animated.View
        style={[containerStyle, {transform: [{translateX}, {translateY}]}]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Movable;
