import { Button } from "@mui/material";

import styled from "styled-components";

export const ButtonDetailsStyle = styled(Button)`
  background: var(--green);
  font-size: 1rem;
  transition: filter 0.2s;

  &:hover {
    background: var(--green);
    filter: brightness(0.8);
  }
`;
