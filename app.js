class GroceryListItem extends React.Component {

	constructor(props) {
		super(props);

		// `state` is just an object literal
    this.state = {
      done: false
    };
	}

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
	onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

	render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
		return (
			<section>
		  	{<li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>} 
		  </section>
		);
	}
}


var GroceryList = (props) => (
	<ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Bacon', 'Eggs']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));