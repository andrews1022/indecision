import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
	background-color: ${({ theme }) => theme.colors.lightBlue};
	color: ${({ theme }) => theme.shades.white};
	max-width: 30rem;
	outline: none;
	padding: ${({ theme }) => theme.sizes.sizeLarge};
	text-align: center;
`;

export const Title = styled.h3`
	margin-bottom: ${({ theme }) => theme.sizes.sizeMedium};
`;

export const Text = styled.p`
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.fontWeights.light};
	margin-bottom: ${({ theme }) => theme.sizes.sizeMedium};
	word-break: break-all;
`;
