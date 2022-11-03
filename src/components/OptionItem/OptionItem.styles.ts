import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.shades.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 2rem;
  word-break: break-all;
`;
