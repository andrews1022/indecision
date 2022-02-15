import styled from 'styled-components';

export const OptionItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: ${(props) => `${props.theme.sizes.sizeLarge} ${props.theme.sizes.sizeMedium}`};
`;

export const OptionText = styled.p`
	color: ${(props) => props.theme.shades.white};
	font-weight: ${(props) => props.theme.fontWeights.medium};
	font-size: 2rem;
	word-break: break-all;
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
