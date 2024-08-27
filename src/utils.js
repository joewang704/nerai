import { useRef } from 'react';

export const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Takes in percent chance as a decimal, rolls that percent chance
export const rollProbability = (percent) => {
  return Math.random() < percent; // The maximum is exclusive and the minimum is inclusive
}

export const degToRad = (degrees) => Math.PI / 180 * degrees;

export const useStableCB = (callback, values) => {
  const self = useRef({
    values: values,
    handler: (...args) => {
      return callback(...args, self.current.values)
    }
  });
  self.current.values = values
  return self.current.handler
}