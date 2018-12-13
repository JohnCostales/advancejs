// import React from 'react';

// // User Component -- function style
// class UserCard extends React.Component {
//     constructor(props){
//       super(props);

//       this.state = {clickCount: 0};
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       this.setState( prevState => ({
//         clickCount: this.state.clickCount + 1
//       }));
//     }

//     componentDidMount() {
//       axios.get('https://randomuser.me/api/?results=50')
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error =>{
//         console.log(error);
//       });
//     }

//     componentDidUpdate(){
//       console.log('updated');
//     }

//   render() {
//   return (
//     <div className="column is-3">
//       <div className="card">
//         <div className="card-image">
//           <figure className="image is-4by3">
//             <img src={this.props.image} alt="Placeholder image"></img>
//           </figure>
//         </div>
//         <div className="card-content">
//           <div className="media">
//             <div className="media-left">
//               <figure className="image is-48x48">
//                 <img src={this.props.image} alt="Placeholder image"></img>
//               </figure>
//             </div>
//             <div className="media-content">
//               <p className="title is-4">{this.props.title} {this.props.first} {this.props.last}</p>
//               <p className="subtitle is-6">@{this.props.first}{this.props.last}</p>
//             </div>
//           </div>
//           <div className="content">
//             {this.props.quote} @bulmaio.
//             <p>#css #responsive</p>
//           </div>
//           <div>
//           <button className="button is-primary" onClick={this.handleClick}>Like: {this.state.clickCount}</button>
//           </div>
//         </div>
//     </div>
//     </div>
//   );}
// }

// export default UserCard