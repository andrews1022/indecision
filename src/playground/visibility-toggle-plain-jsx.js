let visbility = false;

const toggleVisibility = () => {
  // flip visbility value between true and false with this:
  visbility = !visbility;

  renderVisibilityToggle();
};

const renderVisibilityToggle = () => {
  const template = (
    <div>
      <h1>Visbility Toggle</h1>
      <button onClick={toggleVisibility}>{visbility ? 'Hide Details' : 'Show Details'}</button>
      {visbility && <p>These are some top secret details!</p>}
    </div>
  );

  // render out our template
  ReactDOM.render(template, root);
};

renderVisibilityToggle();
