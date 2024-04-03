import React from 'react';
import NewRoomForm from './NewRoomForm';

//Use render method to create the house component wih a function that maps over the house data and allows user to delete a room from the house and add one to the house.
export default class House extends React.Component {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) => (
                <li key={index}>
                    {room.roomName} Area: {room.area}
                    <button onClick={e =>
                        this.props.deleteRoom(e, this.props.data, room)
                    }>Delete</button>
                </li>
            ))
            : null;

        return (
            <div className='container'>
                <h1>{this.props.data.house}</h1>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm
                    addNewRoom={this.props.addNewRoom}
                    data={this.props.data} /> {/* Corrected prop name */}
            </div>
        );
    }
}
