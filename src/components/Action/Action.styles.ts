import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.sizeXtraLarge};

  @media ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin-bottom: 2rem;
  }

  button {
    width: 100%;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
