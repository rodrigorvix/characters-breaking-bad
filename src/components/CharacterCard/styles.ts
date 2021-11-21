import { Card, CardContent } from "@mui/material";

import styled from "styled-components";

export const CardContainerStyle = styled(Card)`
  height: 280px;
  width: 170px;

  background-color: var(--black-500);
  color: var(--white);

  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);

  img {
    height: 220px;
  }
`;

export const CardContentStyle = styled(CardContent)`
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.125rem;
    font-weight: 900;
    text-align: center;
  }
`;
