import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const style = StyleSheet.create({
  button: {
    fontSize: RFValue(32),
    lineHeight: RFValue(48),
    height: Dimensions.get("window").height / 9,
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
    margin: 6,
    borderRadius: 12,
  },
});

export const ButtonPrimary = styled.Text`
  width: ${Dimensions.get("window").width / 5}px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.number};
`;

export const Operation = styled.Text`
  width: ${Dimensions.get("window").width / 5}px;
  background-color: ${(props) => props.theme.colors.operation};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.number};
`;

export const ButtonDouble = styled.Text`
  width: ${(Dimensions.get("window").width / 5) * 2 + 12}px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.number};
`;

export const ButtonTriple = styled.Text`
  width: ${(Dimensions.get("window").width / 5) * 3 + 23}px;
  background-color: ${(props) => props.theme.colors.clear};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.number};
`;
