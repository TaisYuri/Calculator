import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonDouble, ButtonPrimary, ButtonTriple, Operation } from '../styles';

interface Ibutton {
  label: string;
  onClick?: any;
  type?: 'number' | 'operation' | 'double' | 'triple';
}


export function Button({ label, onClick, type ='number' }: Ibutton) {
  return (
    <TouchableOpacity onPress={() => onClick(label)}>
      {type === 'number' && <ButtonPrimary style={style.button}>{label}</ButtonPrimary>}
      {type === 'operation' && <Operation style={style.button}>{label}</Operation>}
      {type === 'double' && <ButtonDouble style={style.button}>{label}</ButtonDouble>}
      {type === 'triple' && <ButtonTriple style={style.button}>{label}</ButtonTriple>}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button:{
    fontSize: 20,
    height: Dimensions.get('window').height / 7,
    padding: 20,
    justifyContent: 'center',
    textAlign:'center'
  }
})