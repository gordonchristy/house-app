import React from 'react';
import House from './House';


// Use NewRoomForm component to create a form that allows user to update a house by adding a new room. 
export default class NewRoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            areaValue: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({ nameValue: e.target.value });
    }

    handleAreaChange(e) {
        this.setState({ areaValue: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
      
        if (this.state.nameValue.trim() === '' || this.state.areaValue.trim() === '') {
            alert('Please fill out both name and area fields.');
            return;
        }
        this.props.addNewRoom(e, this.props.data, {
            name: this.state.nameValue,
            area: this.state.areaValue
        });
        this.setState({ nameValue: '', areaValue: '' });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type="text" placeholder="Area" onChange={this.handleAreaChange} value={this.state.areaValue} />
                <button onClick={this.handleClick}>Add Room</button>
            </div>
        );
    }
}
