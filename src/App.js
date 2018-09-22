import React, { Component } from 'react';
import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'John',
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Zhou Jun',
        isConfirmed: true,
        isEditing: false,

      },
      {
        name: 'Andy',
        isConfirmed: true,
        isEditing: false,
      },
    ]
  }


  toggleFilter = () => 
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e => 
    this.setState( { pendingGuest: e.target.value });

  submitNewGuest = e => {
    e.preventDefault();
    this.setState({
      guests:[
        {
          name: this.state.pendingGuest,        
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => 
    this.state.guests.reduce (
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  //GetUnconfirmedGuests = () =>

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed",index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing",index);

  removeGuestAt = index =>
    this.setState({
      guests:[
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
    
  setNameAt = (name, indexToChange)=> {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name: name,
          };
        }
        return guest;
      })
    });
  };


  render() {

    const totalInvited = this.getTotalInvited();
    const attendingGuests = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - attendingGuests;

    return (
      <div className="App">
        <header>
          <h1> Ambassador </h1>
          <p>Inivte your friend and get paid commisions </p>
          <form onSubmit={this.submitNewGuest} >
              <input 
                type="text" 
                onChange={this.handleNameInput}
                value={this.state.pendingGuest} 
                placeholder="Invite Someone"/>
              <button type="submit" name="submit" value="submit">
                Submit
              </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>invited friends </h2>
            <label>
              <input 
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> 
                Hide those who haven't responded
            </label>
          </div>

          <Counter 
            numberAttending={attendingGuests}
            numberUncofirmed={numberUnconfirmed}
            totalInvited={totalInvited}
            />

          <GuestList 
            guests={this.state.guests} 
            toggleConfirmationAt= {this.toggleConfirmationAt}
            toggleEditingAt= {this.toggleEditingAt} 
            setNameAt={this.setNameAt} 
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />

        </div>
      </div>
    );
  }
}

export default App;
