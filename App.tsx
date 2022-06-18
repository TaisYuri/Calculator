import React, { useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import { ChangeTheme } from "./src/components/ChangeTheme";
import { Calculator } from "./src/page";
import theme, { darkTheme } from "./src/util/style/theme";
import { Container } from "./src/page/styles";


export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let [fontsLoaded] = useFonts({ 
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) { 
    return <View />; 
  }

 

  return (
    <ThemeProvider theme={!isThemeDark  ? theme : darkTheme}>
      <StatusBar translucent style={!isThemeDark ? 'dark' : 'light'}/>
      <Container > 
      <ChangeTheme color={isThemeDark} onPressLight={() => setIsThemeDark(false)} onPressDark={() => setIsThemeDark(true)}/>
      <Calculator/>
      </Container>
    </ThemeProvider>
  );
}
