import React from 'react';

// props
type HeaderProps = {
	subtitle?: string;
	title: string;
};

const Header = ({ subtitle, title }: HeaderProps) => (
	<header className='header'>
		<div className='container'>
			<h1 className='header__title'>{title}</h1>
			{subtitle ? <h2 className='header__subtitle'>{subtitle}</h2> : null}
		</div>
	</header>
);

export default Header;
