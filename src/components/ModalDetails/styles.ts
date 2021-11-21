import { Card } from "@mui/material";
import styled from "styled-components";

export const ModalDetailsStyle = styled(Card)`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0%);
  background: var(--black-500);
  border: 2px solid #000;

  height: calc(100vh - 7rem);
  width: 100vw;

  overflow-y: auto;
`;

export const CharacterDetailsStyle = styled.div`
  height: 100px;

  display: flex;
  gap: 1rem;

  position: sticky;
  top: 0;
  background: var(--black-700);
  padding: 1rem;

  overflow: hidden;

  img {
    height: 100%;
    border-radius: 50%;
  }
  div {
    color: var(--white);
    align-self: center;

    p + p {
      margin-top: 0.5rem;
    }
    p:first-child {
      font-size: 1.25rem;
      font-weight: 700;
    }
    span {
      font-weight: 700;
    }
  }
`;

export const ListEpisodesStyle = styled.ul`
  margin-top: 1rem;

  color: var(--white);

  li {
    display: flex;
    gap: 0.5rem;

    padding: 1rem;
    font-size: 1rem;

    @media (max-width: 600px) {
      gap: 0.3rem;
    }

    span:first-child {
      font-weight: 700;
    }
    span:last-child {
      font-weight: 700;
      justify-self: end;
    }
  }
`;
