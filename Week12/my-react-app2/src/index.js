import React from 'react';
import ReactDOM from 'react-dom';
import data from "./data";
import 'bulma/css/bulma.min.css';

const users = data.results;

// User Component -- function style
function User(props) {
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image"></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={props.image} alt="Placeholder image"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.title} {props.first} {props.last}</p>
              <p className="subtitle is-6">@{props.first}{props.last}</p>
            </div>
          </div>
          <div className="content">
            {props.quote} <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
          </div>
        </div>
    </div>
    </div>
  );
}

const userList = users.map( u =>
  <User key={
    u.id}
    title={u.name.title}
    name={u.name.first}
    last={u.name.last}
    quote={u.quote}
    image={u.picture.large}
    /> );

ReactDOM.render(
  <div className="columns is-multiline">
  {userList}
  </div>,
  document.getElementById('root')
);
