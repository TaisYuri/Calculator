import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';



export const Container = styled(LinearGradient).attrs( props => ({
  colors: [
    props.theme.colors.background_alternative_third,
    props.theme.colors.background_alternative_secundary,
    props.theme.colors.background_alternative_primary,
  ]
}))
 `
 flex: 1;
 padding: 10px;
 `;

export const SectionButtons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

