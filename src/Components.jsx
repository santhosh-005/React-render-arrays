import React, { Component } from "react";
import "./component.css";

class Components extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  renderAllItems = (data) => {
    let mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li>
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
          <span>Age:{item.age}</span>
          <span>Experience:{item.years}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderBasedOnUserType = (data) => {
    let filteredUsers = data.filter(item => item.user_type === 'Designer');
    return(this.renderAllItems(filteredUsers))
  }

  renderBasedOnName = (data) => {
    let filteredUsers=data.filter((item)=>{ return item.name[0]==='J'});
    return(this.renderAllItems(filteredUsers))
  }

  renderBasedOnAge = (data)=>{
    let filteredUsers=data.filter((item)=>item.age > 28 && item.age<=51)
    return(this.renderAllItems(filteredUsers))
  }
  
  renderTotalExp=(data)=>{
    // let filteredUsers = data.filter(item => item.user_type === 'Designer');
    const totalExperienceOfDesigners = data
  .filter(user => user.user_type === 'Designer') 
  .map(designer => designer.years) 
  .reduce((total, years) => total + years, 0); 
 return totalExperienceOfDesigners

  }

  render() {
    return (
      <React.Fragment>

        <h1>LIST ALL ITEMS</h1>
        <div>
          <ul>{this.renderAllItems(this.state.userData)} </ul>
        </div>

        <h1>LIST ALL DATA BASED ON USERTYPE</h1>
        <div>
          <ul>{this.renderBasedOnUserType(this.state.userData)} </ul>
        </div>

        <h1>FILTER ALL DATA STARTING WITH THE LETTER J</h1>
        <div>
          <ul>{this.renderBasedOnName(this.state.userData)} </ul>
        </div>

        <h1>FILTER DATA BASED ON AGE</h1>
        <div>
          <ul>{this.renderBasedOnAge(this.state.userData)} </ul>
        </div>

        <h1>FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
        <div>
          <h2>Total Experience: {this.renderTotalExp(this.state.userData)} </h2>
        </div>

      </React.Fragment>
    );
  }
}
export default Components;


