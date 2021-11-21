import { Button } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

import styles from './styles.module.scss'

interface ButtonProps extends Pick<MuiButtonProps, Exclude<keyof MuiButtonProps, "variant">> {  
  variant?: "square" | MuiButtonProps["variant"];
}

export function ButtonDetails(props:ButtonProps) {
  return (
    <Button variant="contained" className={styles.buttonDetails} onClick={props.onClick}>
               {props.children}
    </Button>
  );
}