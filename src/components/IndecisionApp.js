import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

// parent component
export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	// reset modal state (to allow it to be closed)
	clearSelectedOption = () => this.setState(() => ({ selectedOption: undefined }));

	// clear all options
	deleteOptions = () => {
		// to return an object in the same line, wrap it in a pair of ()
		this.setState(() => ({ options: [] }));
	};

	// delete a single option
	deleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};

	// randomly pick an option
	pickOption = () => {
		const randomIndex = Math.floor(Math.random() * this.state.options.length);
		const randomOption = this.state.options[randomIndex];

		this.setState(() => ({ selectedOption: randomOption }));
	};

	addOption = (option) => {
		// check if falsy value
		if (!option) {
			return 'Enter a valid value';

			// check for duplicate
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		// otherwise, this code runs
		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};

	// this one fires when the component first gets mounted to the dom (rendered on the screen)
	componentDidMount() {
		// check if json data from localStorage is valid - use try catch
		try {
			// get localStorage data
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			// check if options does contain data (is not null)
			if (options) {
				// use this.setState to display options from local storage
				this.setState(() => ({ options: options }));
			}
		} catch (error) {
			// do nothing at all if json data is invalid
		}
	}

	// this fires after the component updates (after state or prop values change)
	componentDidUpdate(prevProps, prevState) {
		// check to see if the options array length actually changes
		if (prevState.options.length !== this.state.options.length) {
			// convert our options array to string data for local storage
			const json = JSON.stringify(this.state.options);

			// set it in localStorage
			localStorage.setItem('options', json);
		}
	}

	// this fires just before your component goes away
	componentWillUnmount() {
		console.log('component will unmount');
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer!';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className='container'>
					<Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
					<div className='widget'>
						<Options
							options={this.state.options}
							deleteOptions={this.deleteOptions}
							deleteOption={this.deleteOption}
						/>
						<AddOption addOption={this.addOption} />
					</div>
				</div>
				<OptionModal
					selectedOption={this.state.selectedOption}
					clearSelectedOption={this.clearSelectedOption}
				/>
			</div>
		);
	}
}
