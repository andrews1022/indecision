import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.sizes.sizeMedium};
`;

export const Title = styled.h3``;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.sizes.sizeLarge};
  text-align: center;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => `${theme.sizes.sizeLarge} ${theme.sizes.sizeMedium}`};
`;
