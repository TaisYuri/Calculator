export type ThemeType = typeof lightTheme;


export const lightTheme ={
  colors: {
    primary: "#F3F0D7",
    background_alternative_primary: '#CEE5D0',
    background_alternative_secundary:'#DFEEE0' ,
    background_alternative_third:'#FFF',
    operation: '#FED2AA',
    clear: '#FFBF86',
    text: 'rgba(0,0,0,0.7)',
  },
  fonts:{
    number: 'Lato_400Regular',
    number_bold: 'Lato_700Bold'
  }
};

export const darkTheme: ThemeType ={
  colors: {
    primary: "#729CA2",
    background_alternative_primary: '#668c91',
    background_alternative_secundary: '#2d3e40',
    background_alternative_third:'#000',
    operation: '#C4DCDF',
    clear: '#FF893B',
    text: '#FFF',
  },
  fonts:{
    number: 'Lato_400Regular',
    number_bold: 'Lato_700Bold'
  }
};

const theme = lightTheme; 

export default theme;