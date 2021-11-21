import { Card, CardActions, CardContent } from "@mui/material";

import styled from "styled-components";

export const ModalCardStyle = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500;
  background: var(--black-500);
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 1rem;
`;

export const CardContentStyle = styled(CardContent)`
  text-align: center;

  h3 {
    font-weight: 900;
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    span {
      font-weight: 700;
    }
  }

  h3,
  p {
    color: var(--white);
  }
`;

export const ButtonDetailsStyle = styled(CardActions)`
  justify-content: center;
`;
