import styled from 'styled-components/native';

interface Color{
    color: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 50px;
  margin: 30px 5px;
`;

export const WrapperButtons = styled.View<Color>`
  flex-direction: row;
  border-color:  ${(props) => props.color ?'#FFF' : '#d4d4d4'};
`;


export const SwitchColor = styled.TouchableOpacity<Color>`
    border-radius: 10px;
    padding: 5px;
    background-color: ${(props) => props.color ?'transparent' : '#d4d4d4'};
   
`;


