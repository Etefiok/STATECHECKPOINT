import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { useState } from 'react';


// class App extends Component {
//   state = {
//     fullName: "diligent samuel",
//     bio: "this is my first state in react",
//     imgSrc: "https://www.mykhel.com/thumb/190x90x190/football/players/3/186703.1528888991.jpg ",
//     profession: "web Developer",
//     show: true
//   };

// toggleShow = () =>{
//   this.setState({show: !this.state.show});
// };

    //  changeName(){
    // this.setState(prevState =>({
    //   show: !prevState.false
    // }))
    //  }

//    render(){
//     return(
//       <div>
//        <h2>My name is {this.state.fullName}</h2>
//        <p>{this.state.bio}</p>
//        <img src={this.state.imgSrc} />
//        <h4>my profession is {this.state.profession}</h4>
//        <button onClick={this.toggleShow}> change my name</button>
//        {this.state.show && ()}
//       </div>
//     )
//   }
// }

// export default App;



class App extends Component {
  state = {
    fullName: "diligent samuel",
    bio: "this is my first state in react",
    imgSrc:"https://www.mykhel.com/thumb/190x90x190/football/players/3/186703.1528888991.jpg",
    profession: "web Developer",
    
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h2>My name is {this.state.fullName}</h2>
        <p>{this.state.bio}</p>
       
        <h4>I am a {this.state.profession}</h4>

        <img src={this.state.imgSrc} alt="Profile" /><br/>
        <button style= {{background: "red", color: "blue", borderTop: "none"}} onClick={this.toggleShow}>show details</button>
        {this.state.show && <p>{this.state.fullName}<br />
        {this.state.bio}<br />
        {this.state.profession}</p>}
      </div>
    );
  }
}

export default App;
