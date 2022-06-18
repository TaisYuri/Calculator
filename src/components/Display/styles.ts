import styled from "styled-components/native";

export const BoxDisplay = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const TextDisplay = styled.Text`
  font-size: 60px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.number_bold};
`;

export const History = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.number};
`;
