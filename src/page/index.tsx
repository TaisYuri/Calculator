import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { Container, SectionButtons } from "./styles";
import theme, { darkTheme } from "../util/style/theme";
import { ChangeTheme } from "../components/ChangeTheme";
import { Display } from "../components/Display";
import { Button } from "../components/Button";


export function Calculator() {
  const [displayValueState, setDisplayValue] = useState("0");
  const [valueDisplayHistory, setValueDisplayHistory] = useState([ "0", "","0",]);
  const [clearDisplayState, setClearDisplay] = useState(false);
  const [operationsState, setOperations] = useState<string | null>(null);
  const [valuesState, setValues] = useState([0, 0]); // [0 => para antes do sinal da operação, 0 => para depois do sinal da operação]
  const [currentState, setCurrent] = useState(0); //utilizado para verificar a posição entre 0 e 1 do VALUESTATE

  const clear = () => {
    setDisplayValue("0");
    setClearDisplay(false);
    setOperations(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  const addDigit = (num: string) => {
    //Verifica se possui um valor 0 em tela ou se acabou de ser limpo o display
    const clearDisplay = displayValueState === "0" || clearDisplayState;
    
    //garante que apenas 1 ponto pode ser adicionado no display
    if (num === "." && !clearDisplay && displayValueState.includes(".")) {
      return;
    }

    //Se o valor acima for True, então não armazena nada, caso contrário adiciona o valor do display
    const currentValue = clearDisplay ? "" : displayValueState;
    //Concatena o valor do display + valor digitado.
    const displayValue = currentValue + num;

    setDisplayValue(displayValue);
    setClearDisplay(false);

    if (num !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...valuesState];
      values[currentState] = newValue; //atraves do current verificará se salvará o value na posição 0 ou 1
      setValues(values);
    }
  };

  const setOperation = (operation: string) => {
    if (currentState === 0) {
      setOperations(operation);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = operation === "=";
      const values = [...valuesState];
      
      //guarda informação para exibir no histórico. Apenas quando o sinal for diferente de =
      {operationsState !== '=' && 
        setValueDisplayHistory([`${values[0]}`,`${operationsState}`,`${values[1]}`]);
      }

      try {
        values[0] = eval(`${values[0]} ${operationsState} ${values[1]}`); //avalia uma expressão. Podendo retornar sucesso ou falha
      } catch (err) {
        values[0] = valuesState[0];
      }

      values[1] = 0;
      setDisplayValue(String(values[0]));
      setOperations(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(true);
      setValues(values);
    }
  };

  return (
      < >        
        <Display
          value={displayValueState}
          valueHistory_1={valueDisplayHistory[0]}
          valueHistory_2={valueDisplayHistory[1]}
          valueHistory_3={valueDisplayHistory[2]}
        />
        <SectionButtons>
          <Button label="AC" type="triple" onClick={clear} />
          <Button label="/" type="operation" onClick={setOperation} />
          <Button label="7" onClick={addDigit} />
          <Button label="8" onClick={addDigit} />
          <Button label="9" onClick={addDigit} />
          <Button label="*" type="operation" onClick={setOperation} />
          <Button label="4" onClick={addDigit} />
          <Button label="5" onClick={addDigit} />
          <Button label="6" onClick={addDigit} />
          <Button label="-" type="operation" onClick={setOperation} />
          <Button label="1" onClick={addDigit} />
          <Button label="2" onClick={addDigit} />
          <Button label="3" onClick={addDigit} />
          <Button label="+" type="operation" onClick={setOperation} />
          <Button label="0" type="double" onClick={addDigit} />
          <Button label="." onClick={addDigit} />
          <Button label="=" type="operation" onClick={setOperation} />
        </SectionButtons>
      </>
  
  );
}
