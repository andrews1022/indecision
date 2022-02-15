import React from 'react';

// styled components
import * as S from './styles';
import { Container } from '../UI/Container';

// props
type HeaderProps = {
	subtitle?: string;
	title: string;
};

const Header = ({ subtitle, title }: HeaderProps) => (
	<S.Header>
		<Container>
			<S.Title>{title}</S.Title>

			{subtitle ? <S.SubTitle>{subtitle}</S.SubTitle> : null}
		</Container>
	</S.Header>
);

export default Header;
