import styled from 'styled-components';

export const Header = styled.header`
	background-color: ${(props) => props.theme.colors.offBlack};
	color: ${(props) => props.theme.shades.white};
	margin-bottom: ${(props) => props.theme.sizes.sizeXtraLarge};
	padding: ${(props) => props.theme.sizes.sizeMedium};

	@media ${(props) => props.theme.mediaQueries.mobileLarge} {
		margin-bottom: 2rem;
	}
`;

export const Title = styled.h1`
	font-size: ${(props) => props.theme.sizes.sizeLarge};
`;

export const SubTitle = styled.h2`
	color: ${(props) => props.theme.colors.offWhite};
	font-size: ${(props) => props.theme.sizes.sizeMedium};
	font-weight: ${(props) => props.theme.fontWeights.medium};
`;
