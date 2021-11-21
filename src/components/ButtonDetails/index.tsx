import React from "react";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

import { ButtonDetailsStyle } from "./styles";

interface ButtonProps
  extends Pick<MuiButtonProps, Exclude<keyof MuiButtonProps, "variant">> {
  variant?: "square" | MuiButtonProps["variant"];
}

export function ButtonDetails(props: ButtonProps) {
  return (
    <ButtonDetailsStyle variant="contained" onClick={props.onClick}>
      {props.children}
    </ButtonDetailsStyle>
  );
}
