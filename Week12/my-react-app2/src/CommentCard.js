import React from "react";

// Component to represent a single User 'Card' (note: this is a class component so can use state)
// Classes used below are from Bulma, see index.html above
class Comment extends React.Component {
  constructor(props) {
    super(props);

    // Setup the state data
    this.state = {
      flag: false
    };

    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler for the button
  handleClick() {
    // Increment the likes property stored in state
    this.setState(prevState => ({
      flag: !prevState.flag
    }));
  }

  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p>>{this.props.name}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>{this.props.email}</p>
            
            <p>{this.props.body}</p>
          </div>
        </div>
        <footer className="card-footer">
        <button className="button" onClick={this.handleClick}>Like: {this.state.clickCount}</button>
        </footer>
    </div>
    );
  }
}

// Allow this to be imported by another JS file export default Comment
export default Comment;