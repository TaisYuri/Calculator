import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

//-------- DISPLAY
export const BoxDisplay = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  background-color: #000aaa;
`;

//-------- BUTTON

export const ButtonPrimary = styled.Text`
   width: ${Dimensions.get('window').width / 4}px;  
`;

export const Operation = styled.Text`
  width: ${(Dimensions.get('window').width / 4)}px;
  background-color: azure;
`;

export const ButtonDouble = styled.Text`
  width: ${(Dimensions.get('window').width / 4) * 2}px;
`;

export const ButtonTriple = styled.Text`
  width: ${(Dimensions.get('window').width / 4) * 3}px;
  border-width: 0.7px;
`;