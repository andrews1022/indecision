import styled from 'styled-components';

export const OptionsWrapper = styled.ul`
	margin: 0;
	padding: 0;
`;

export const Button = styled.button`
	/* base styles */
	background-color: ${(props) => props.theme.colors.purple};
	border: none;
	color: ${(props) => props.theme.shades.white};
	font-weight: ${(props) => props.theme.fontWeights.medium};
	padding: ${(props) => props.theme.sizes.sizeSmall};

	/* link variant styles */
	background: none;
	border: none;
	color: ${(props) => props.theme.colors.offWhite};
`;
