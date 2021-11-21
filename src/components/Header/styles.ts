import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 6rem;
  padding: 0 1rem;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: 500px) {
    height: 4rem;
  }

  h1 {
    align-self: center;
    font-size: 2rem;
    font-weight: 900;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  img {
    height: 6rem;

    @media (max-width: 500px) {
      height: 4rem;
    }
  }
`;
