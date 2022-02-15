import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Error = styled.p`
	color: ${(props) => props.theme.colors.offWhite};
	font-style: italic;
	margin: ${(props) => props.theme.sizes.sizeMedium};
	padding: 0 ${(props) => props.theme.sizes.sizeMedium};
`;

export const Form = styled.form`
	display: flex;
	padding: ${(props) => props.theme.sizes.sizeMedium};

	@media ${(props) => props.theme.mediaQueries.mobileLarge} {
		flex-wrap: wrap;
	}
`;

export const Input = styled.input`
	background-color: ${(props) => props.theme.colors.darkBlue};
	border: none;
	color: ${(props) => props.theme.colors.offWhite};
	flex: 1;
	padding: ${(props) => props.theme.sizes.sizeSmall};
	margin-right: ${(props) => props.theme.sizes.sizeSmall};

	@media ${(props) => props.theme.mediaQueries.mobileLarge} {
		margin-right: 0;
	}
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.colors.purple};
	border: none;
	color: ${(props) => props.theme.shades.white};
	font-weight: ${(props) => props.theme.fontWeights.medium};
	padding: ${(props) => props.theme.sizes.sizeSmall};

	@media ${(props) => props.theme.mediaQueries.mobileLarge} {
		margin-top: ${(props) => props.theme.sizes.sizeSmall};
		width: 100%;
	}
`;
