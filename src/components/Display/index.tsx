import React from 'react';
import { Text } from 'react-native';
import { BoxDisplay } from '../styles';


interface Idisplay {
    value: string;
  }


  export function Display({ value }: Idisplay) {
    return (
      <BoxDisplay>
        <Text>{value}</Text>
      </BoxDisplay>
    );
  }