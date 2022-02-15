import React from 'react';

// add option component
export default class AddOption extends React.Component {
	state = { error: undefined };

	// we can also set state in child components
	// here we mange any possible error messages returned by the parent
	// handle adding an option
	addOption = (e) => {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		this.setState(() => ({ error: error }));

		// clear the input if there was no error
		if (!error) {
			e.target.elements.option.value = '';
		}
	};

	render() {
		return (
			<div className='add-option'>
				{this.state.error && <p className='add-option__error'>{this.state.error}</p>}
				<form className='add-option__form' onSubmit={this.addOption}>
					<input className='add-option__input' type='text' name='option' />
					<button className='add-option__button button'>Add Option</button>
				</form>
			</div>
		);
	}
}
