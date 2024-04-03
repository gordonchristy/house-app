import './App.css';
import React from 'react';
import House from './components/House.js';
import NewRoomForm from './components/NewRoomForm.js';


const HOUSES_ENDPOINT = 'https://65e15639d3db23f7624ace30.mockapi.io/houses';
//Create add room and delete room states


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }
//Render the data from the API and return it in the function below
  render() {
    console.log(this.state.houses)
    const houses = this.state.houses
      ? this.state.houses.map((house, index) =>
        <House
          key={index}
          data={house}
          addNewRoom={this.addNewRoom}
          deleteRoom={this.deleteRoom}/>)
      : null;

    return (
      <div>
        {houses}
      </div>
    );
  }
//Fetch house data from API
 componentDidMount(){
    
     
    
    fetch(HOUSES_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        this.setState({
          houses:data
        });
      });
  }
//Delete a room 
  deleteRoom(e, house, room) {
    const index = house.rooms.indexOf(room);
    house.rooms.splice(index, 1);
    updateHouse(house)
      .then(() => {
        this.setState(state => {
          for (let h of state.houses) {
            if (h._id === house._id) {
              h = house;
              break;
            }
          }
          return state;
        });
      });
    e.preventDefault();
  }
//Add a room
  addNewRoom(e, house, room) {
    house.rooms.push(room);
    updateHouse(house)
      .then(() => {
        this.setState(state => {
          for (let h of state.houses) {
            if (h._id === house._id) {
              h = house; 
              break;
            }
          }
          return state;
        });
      });
    e.preventDefault();
  }
}
//Update a house
function updateHouse(house) {
  return fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(house) 
  });
}
