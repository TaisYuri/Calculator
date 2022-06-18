import React from "react";
import { TouchableOpacity } from "react-native";

import {
  ButtonDouble,
  ButtonPrimary,
  ButtonTriple,
  Operation,
  style,
} from "./styles";

interface Ibutton {
  label: string;
  onClick?: any;
  type?: "number" | "operation" | "double" | "triple";
}

export function Button({ label, onClick, type = "number" }: Ibutton) {
  return (
    <TouchableOpacity onPress={() => onClick(label)}>
      {type === "number" && (
        <ButtonPrimary style={style.button}>{label}</ButtonPrimary>
      )}
      {type === "operation" && (
        <Operation style={style.button}>{label}</Operation>
      )}
      {type === "double" && (
        <ButtonDouble style={style.button}>{label}</ButtonDouble>
      )}
      {type === "triple" && (
        <ButtonTriple style={style.button}>{label}</ButtonTriple>
      )}
    </TouchableOpacity>
  );
}
