import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import 'bulma/css/bulma.min.css';
import axios from 'axios';

class UserGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {users: []};
  }

  componentDidMount (){
    axios.get('https://randomuser.me/api/?results=50')
    .then(response => {
      this.setState({users: response.data.results});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    const userList = this.state.users.map( u =>(
      <UserCard key={
        u.id}
        title={u.name.title}
        name={u.name.first}
        last={u.name.last}
        quote={u.quote}
        image={u.picture.large}
        /> ));
        return(
          <div className="columns is-multiline">
          {userList}
          </div>
        )
  }
}

ReactDOM.render(
  <UserGrid />,
  document.getElementById('root')
);
