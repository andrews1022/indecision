class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);

		// setup default state object (MUST be done inside the constructor function)
		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		try {
			const localStorageData = localStorage.getItem('count');
			const count = +localStorageData;

			if (count) {
				this.setState(() => ({ count: count }));
			}
		} catch (error) {
			// do nothing if invalid
		}
	}

	componentDidUpdate(prevProps, prevState) {
		// convert our options array to string data for local storage
		const count = this.state.count.toString();

		// set it in localStorage
		localStorage.setItem('count', count);
	}

	increment() {
		this.setState((prevState) => {
			return {
				count: (prevState.count += 1)
			};
		});
	}

	decrement() {
		this.setState((prevState) => ({ count: (prevState.count -= 1) }));
	}

	reset() {
		this.setState(() => ({ count: 0 }));
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.increment}>+1</button>
				<button onClick={this.decrement}>-1</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter count={10} />, document.getElementById('root'));
