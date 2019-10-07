import {useRef} from 'react';

export const memoize = initialValue => {
  const memoizedValue = useRef(initialValue);

  return memoizedValue.current;
};
