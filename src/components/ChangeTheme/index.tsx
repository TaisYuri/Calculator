import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, SwitchColor, WrapperButtons } from "./style";

export interface IChangeTheme {
  color: boolean;
  onPressLight?: () => void;
  onPressDark?: () => void;
}

export function ChangeTheme({
  color,
  onPressLight,
  onPressDark,
}: IChangeTheme) {
  return (
    <Container>
      <WrapperButtons color={color}>
        <SwitchColor color={color} onPress={onPressLight}>
          <MaterialIcons
            name="lightbulb"
            size={20}
            color={color ? "#c9c9c9" : "#fff"}
          />
        </SwitchColor>
        <SwitchColor color={!color} onPress={onPressDark}>
          <MaterialIcons
            name="nightlight-round"
            size={20}
            color={color ? "#fff" : "#c9c9c9"}
          />
        </SwitchColor>
      </WrapperButtons>
    </Container>
  );
}
