import React, { Component } from 'react';
import Calendar from './components/Calendar'
import './App.css';


const tabEvents = [
    {
        _id: 1,
        typeId: 1,
        title: 'Journée Event',
        start: '2017-05-01',
        backgroundColor: '#FF0080',
        allDay: true,
				},
    {
        _id: 2,
        typeId: 2,
        title: 'Evenement sur 3 jours',
        start: '2017-05-07',
        end: '2017-05-10',
        backgroundColor: '#FFFF00',
        textColor: '#000'
				},
    {
        _id: 3,
        typeId: 3,
        id: 999,
        title: 'Repeating Event',
        start: '2017-05-09T16:00:00',
        backgroundColor: '#D700D8'
				},
    {
        _id: 4,
        typeId: 4,
        id: 999,
        title: 'Repeating Event',
        start: '2017-05-16T16:00:00',
        backgroundColor: '#32FF93'
				},
    {
        _id: 5,
        typeId: 1,
        title: 'Conference',
        start: '2017-05-11',
        end: '2017-05-13',
        backgroundColor: '#FF0080'
				},
    {
        _id: 6,
        typeId: 2,
        title: 'Meeting',
        start: '2017-05-12T10:30:00',
        end: '2017-05-12T12:30:00',
        backgroundColor: '#FFFF00',
        textColor: "#000"
				},
    {
        _id: 7,
        typeId: 3,
        title: 'Repas',
        start: '2017-05-12T12:00:00',
        end: '2017-05-12T14:00:00',
        backgroundColor: '#D700D8'
				},
    {
        _id: 8,
        typeId: 4,
        title: 'Meeting',
        start: '2017-05-12T14:30:00',
        end: '2017-05-12T15:30:00',
        backgroundColor: '#32FF93'
				},
    {
        _id: 9,
        typeId: 1,
        title: 'Happy Hour',
        start: '2017-05-12T17:30:00',
        end: '2017-05-12T19:30:00',
        backgroundColor: '#FF0080'
				},
    {
        _id: 10,
        typeId: 2,
        title: 'Dinner',
        start: '2017-05-12T20:00:00',
        end: '2017-05-12T22:00:00',
        backgroundColor: '#FFFF00',
        textColor: "#000"
				},
    {
        _id: 11,
        typeId: 3,
        title: 'Birthday Party',
        start: '2017-05-13T07:00:00',
        backgroundColor: '#D700D8'
				},
    {
        _id: 12,
        typeId: 1,
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-05-28',
        backgroundColor: '#FF0080'
				},
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      events:tabEvents,
    };

    this.addRdv = this.addRdv.bind(this)
  }

  addRdv(evt){
    const tab = this.state.events.concat(evt);
    this.setState({events: tab})    
  }

  render() {
    return (
      <div className="App">
        <Calendar
          events={this.state.events}
          addRdv={this.addRdv}
          />
      </div>
    );
  }
}

export default App;
