import styled from 'styled-components';

// custom types
import type { ThemeColor, ThemeShade } from '../../types/global';

// props type
type ButtonProps = {
  backgroundColor: ThemeColor;
  color: ThemeColor | ThemeShade;
  largeFontSize?: boolean;
  largePadding?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor]};
  border: none;
  color: ${({ color, theme }) => (color === 'white' ? theme.shades.white : theme.colors.offWhite)};
  font-size: ${({ largeFontSize, theme }) => (largeFontSize ? theme.sizes.sizeLarge : '1rem')};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ largePadding, theme }) => (largePadding ? '2.5rem' : theme.sizes.sizeSmall)};
`;
