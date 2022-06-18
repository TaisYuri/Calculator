import React from "react";

import { BoxDisplay, TextDisplay, History } from "./styles";

interface Idisplay {
  value: string;
  valueHistory_1: string;
  valueHistory_2: string;
  valueHistory_3: string;
}

export function Display({
  value,
  valueHistory_1,
  valueHistory_2,
  valueHistory_3 = "0",
}: Idisplay) {
  return (
    <BoxDisplay>
      {valueHistory_3 !== "0" && (
        <History>{`${valueHistory_1} ${valueHistory_2} ${valueHistory_3} =`}</History>
      )}
      <TextDisplay numberOfLines={1}>{ value}</TextDisplay>
    </BoxDisplay>
  );
}
