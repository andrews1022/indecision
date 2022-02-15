class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);

		this.toggleVisibility = this.toggleVisibility.bind(this);

		this.state = {
			visibility: false,
		};
	}

	toggleVisibility() {
		// this.setState((prevState) => {
		// 	return {
		// 		visibility: !prevState.visibility,
		// 	};
		// });

		// shorthand syntax of above
		this.setState((prevState) => ({ visibility: !prevState.visibility }));
	}

	render() {
		return (
			<div>
				<h1>Visbility Toggle</h1>
				<button onClick={this.toggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.visibility && <p>These are some top secret details!</p>}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('root'));
