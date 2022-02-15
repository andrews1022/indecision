import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
	background-color: ${(props) => props.theme.colors.lightBlue};
	color: ${(props) => props.theme.shades.white};
	max-width: 30rem;
	outline: none;
	padding: ${(props) => props.theme.sizes.sizeLarge};
	text-align: center;
`;

export const Title = styled.h3`
	margin: 0 0 ${(props) => props.theme.sizes.sizeMedium} 0;
`;

export const Text = styled.p`
	font-size: 2rem;
	font-weight: ${(props) => props.theme.fontWeights.light};
	margin: 0 0 ${(props) => props.theme.sizes.sizeMedium} 0;
	word-break: break-all;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.colors.purple};
	border: none;
	color: ${(props) => props.theme.shades.white};
	font-weight: ${(props) => props.theme.fontWeights.medium};
	padding: ${(props) => props.theme.sizes.sizeSmall};
`;
