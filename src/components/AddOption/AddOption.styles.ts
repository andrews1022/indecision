import styled from "styled-components";

export const Wrapper = styled.div``;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  font-style: italic;
  margin: ${({ theme }) => theme.sizes.sizeMedium};
  padding: 0 ${({ theme }) => theme.sizes.sizeMedium};
`;

export const Form = styled.form`
  display: flex;
  padding: ${({ theme }) => theme.sizes.sizeMedium};

  @media ${({ theme }) => theme.mediaQueries.mobileLarge} {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  color: ${({ theme }) => theme.colors.offWhite};
  flex: 1;
  padding: ${({ theme }) => theme.sizes.sizeSmall};
  margin-right: ${({ theme }) => theme.sizes.sizeSmall};

  @media ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin-right: 0;
  }
`;

export const ButtonWrapper = styled.div`
  @media ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin-top: ${({ theme }) => theme.sizes.sizeSmall};
    width: 100%;
  }
`;
