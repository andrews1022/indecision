import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	max-width: 60rem;
	padding: 0 ${({ theme }) => theme.sizes.sizeMedium};
`;
