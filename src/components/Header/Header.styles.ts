import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.offBlack};
  color: ${({ theme }) => theme.shades.white};
  margin-bottom: ${({ theme }) => theme.sizes.sizeXtraLarge};
  padding: ${({ theme }) => theme.sizes.sizeMedium};
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.sizeLarge};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: ${({ theme }) => theme.sizes.sizeMedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
