import React from 'react';

const Header = (props) => (
	<header className='header'>
		<div className='container'>
			<h1 className='header__title'>{props.title}</h1>

			{/* conditionally render subtitle only if prop was passed down */}
			{props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
		</div>
	</header>
);

// we can add on default prop values after defining the component by using .defaultProps
Header.defaultProps = {
	title: 'Indecision'
};

export default Header;
