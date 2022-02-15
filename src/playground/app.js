console.log('app.js is running!');

// parent component
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.deleteOptions = this.deleteOptions.bind(this);
		this.deleteOption = this.deleteOption.bind(this);
		this.pickOption = this.pickOption.bind(this);
		this.addOption = this.addOption.bind(this);

		// configure default state value to use default options prop values
		this.state = {
			options: []
		};
	}

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
		// our remove all button can be clicked even when there are no options
		// this could result in unnecessary state changes, and componentDidUpdate() would fire every time
		// so here we check to see if the options array length actually change
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

	// clear all options
	deleteOptions() {
		// to return an object in the same line, wrap it in a pair of ()
		this.setState(() => ({ options: [] }));
	}

	// delete a single option
	deleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	}

	// randomly pick an option
	pickOption() {
		const randomIndex = Math.floor(Math.random() * this.state.options.length);
		const randomOption = this.state.options[randomIndex];
		console.log(randomOption);
	}

	addOption(option) {
		// check if falsy value
		if (!option) {
			return 'Enter a valid value';

			// check for duplicate
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		// otherwise, this code runs
		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer!';

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
				<Options
					options={this.state.options}
					deleteOptions={this.deleteOptions}
					deleteOption={this.deleteOption}
				/>
				<AddOption addOption={this.addOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>

			{/* conditionally render subtitle only if prop was passed down */}
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

// we can add on default prop values after defining the component by using .defaultProps
Header.defaultProps = {
	title: 'Indecision'
};

// Action component as 'stateless functional component'
const Action = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions} onClick={props.pickOption}>
				What should I do?
			</button>
		</div>
	);
};

// options parent component
const Options = (props) => {
	return (
		<div>
			<button onClick={props.deleteOptions}>Remvove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			{props.options.map((option) => (
				// pass down deleteOption prop one more time!
				<Option key={option} optionText={option} deleteOption={props.deleteOption} />
			))}
		</div>
	);
};

// individual option component
const Option = (props) => {
	return (
		<div>
			<li>{props.optionText}</li>
			{/* we cannot call deleteOption directly, as we get the event object from the button click, so we need to use this setup with the inline arrow function */}
			<button
				onClick={(e) => {
					props.deleteOption(props.optionText);
				}}
			>
				Remove
			</button>
		</div>
	);
};

// add option component
class AddOption extends React.Component {
	// we can also set state in child components
	// here we mange any possible error messages returned by the parent
	constructor(props) {
		super(props);

		this.addOption = this.addOption.bind(this);

		this.state = {
			error: undefined
		};
	}

	// handle adding an option
	addOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		this.setState(() => ({ error: error }));

		// clear the input if there was no error
		if (!error) {
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.addOption}>
					<input type='text' name='option' />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

// render the app
ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
