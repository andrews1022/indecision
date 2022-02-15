// grab div with id of root
const root = document.getElementById('root');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer!',
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();

	// get the user input value, if any
	const option = e.target.elements.option.value;

	// check if valid value
	if (option) {
		// push entered value onto our array
		app.options.push(option);

		// clear input field
		e.target.elements.option.value = '';

		renderIndecisionApp();
	}
};

const removeAllOptions = () => {
	app.options = [];
	renderIndecisionApp();
};

// pick random option
const makeDecision = () => {
	// generate random number based on array length
	const randomNum = Math.floor(Math.random() * app.options.length);
	const selectedOption = app.options[randomNum];
	alert(selectedOption);
};

// basic numbers array
const numbers = [50, 100, 1000];

const renderIndecisionApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
			<button disabled={app.options.length === 0 ? true : false} onClick={makeDecision}>
				What should I do?
			</button>
			<button onClick={removeAllOptions}>Remove All</button>
			<ul>
				{app.options.map((option) => (
					<li key={option}>{option}</li>
				))}
			</ul>
			<form onSubmit={onFormSubmit}>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);

	// render out our template
	ReactDOM.render(template, root);
};

renderIndecisionApp();
