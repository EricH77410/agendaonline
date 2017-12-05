import React, { Component } from 'react';

import $ from 'jquery';
import {fullCalendar} from 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css'
import moment from 'moment';

import AddEvt from './AddEvt';


class Calendar extends Component {

  componentDidMount(){
    console.log('didMount')
    const {calendar} = this.refs;
    $(calendar).fullCalendar({
      header: {
            left: 'prev,next,today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2017-05-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: this.state.events,
        theme: false,
        eventDrop: function (evt, delta, revertFunc){
            var boolUndo = false;

            if (boolUndo){
                boolUndo = true;
                revertFunc();
            }
            if (!boolUndo) {
                //updateEvent(evt);
                $(calendar).fullCalendar('updateEvent', evt);
                console.log(moment(evt.end).format('DD MM YYYY'))
            }
        }
    });
  }

  constructor(props){
    super(props);

    this.state = {
      events: this.props.events,
      isOpen: false,
      onClose: false
    };
  }

  onClose = () => {
    this.setState({isOpen:false});
  }

  addEvt(){
    this.setState({isOpen:!this.state.isOpen})
    // const {calendar} = this.refs
    // const evt = {
    //   _id: 13,
    //   typeId: 2,
    //   title: 'Rico',
    //   start: '2017-05-08T10:30:00',
    //   end: '2017-05-08T12:30:00',
    //   backgroundColor: '#FFFF00',
    //   textColor: "#000"
    // }
    // this.props.addRdv(evt);
    // const tab = this.state.events.concat(evt);
    // this.setState({events:tab}, function () {
    //     $(calendar).fullCalendar('renderEvent',evt)
    // })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target[0].value
    console.log('====================================');
    console.log(title);
    console.log('====================================');
  }

  render(){
    console.log('Render')
    return(
      <div>
        <AddEvt isOpen={this.state.isOpen} onClose={this.onClose} onSubmit={this.onSubmit}/>
        <button onClick={this.addEvt.bind(this)}>Add evt</button>
        <div ref="calendar"></div>
      </div>
    );
  }
}

export default Calendar

// $('#calendar').fullCalendar({
//   header: {
//   left: 'prev,next today',
//   center: 'title',
//   right: 'month,agendaWeek,agendaDay'
// },
// editable: true,
// droppable: true, // this allows things to be dropped onto the calendar
// drop: function() {
//   // is the "remove after drop" checkbox checked?
//   if ($('#drop-remove').is(':checked')) {
//     // if so, remove the element from the "Draggable Events" list
//     $(this).remove();
//   }
// }})
