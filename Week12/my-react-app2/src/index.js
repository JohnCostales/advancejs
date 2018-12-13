import React from "react";
import ReactDOM from "react-dom";
import CommentCard from './CommentCard';
import 'bulma/css/bulma.min.css';

// 'Outer' component that will contain all the User 'cards'
class CommentGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 50 users
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    const commentList = this.state.comments.map(c => (
      <CommentCard
        key={c.id}
        name={c.name}
        email={c.email}
        body={c.body}
      />
    ));

    return (
    <div className="container">
      <div className="row">
      {commentList}
      </div>
    </div>
    );
  }
}

ReactDOM.render(<CommentGrid />, document.getElementById("root"));