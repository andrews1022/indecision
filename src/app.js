// import react & indecisionapp
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// import normalize.css
import 'normalize.css/normalize.css';

// load in styles (plain css)
import './styles/styles.scss';

// render the app
ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
