import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${(props) => props.theme.colors.purple};
	border: none;
	color: ${(props) => props.theme.shades.white};
	font-size: ${(props) => props.theme.sizes.sizeLarge};
	font-weight: bold;
	margin-bottom: ${(props) => props.theme.sizes.sizeXtraLarge};
	padding: 2.5rem;
	width: 100%;

	&:disabled {
		opacity: 0.5;
	}

	@media ${(props) => props.theme.mediaQueries.mobileLarge} {
		margin-bottom: 2rem;
	}
`;
