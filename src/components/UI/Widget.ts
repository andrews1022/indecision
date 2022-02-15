import styled from 'styled-components';

export const Widget = styled.div`
	background-color: ${(props) => props.theme.colors.lightBlue};
	margin-bottom: ${(props) => props.theme.sizes.sizeXtraLarge};
`;

export const WidgetHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.colors.blue};
	color: ${(props) => props.theme.colors.offWhite};
	padding: ${(props) => props.theme.sizes.sizeMedium};
`;

export const WidgetInner = styled.div``;

export const WidgetTitle = styled.h3``;

export const WidgetMessage = styled.p`
	color: ${(props) => props.theme.colors.offWhite};
	padding: ${(props) => props.theme.sizes.sizeLarge};
	text-align: center;
`;
