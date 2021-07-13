import React, { useState } from 'react'
import moment from 'moment'
import ConfirmationDetails from './ConfirmationDetails'
import {
  isEqual,
  isPast,
  addDays,
  format,
  set,
  startOfDay,
  startOfMonth,
  getDaysInMonth,
  isSameDay,
} from "date-fns";



let allTimeSlotsInDay = []

function TimeSlots({alreadyExistingAppointments, datePicked}) {

  const [bookAppointment, setBookAppointment] = useState(false)

  const totalHoursInADay = [...Array(24)].map((x, i) => i);

  const alreadyTakenSlots = alreadyExistingAppointments.calendar.map(
    (slot) => new Date(Date.parse(slot.date_time))
  );


  const getSlots = (start, end) => {
    const startTime = moment(start, 'HH:mm');
    const endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    let timeSlots = [];

    while (startTime <= endTime) {
      timeSlots.push(new moment(startTime).format('HH:mm:ss'));
      startTime.add(1, 'hours');
    }
    return timeSlots;
  }
  allTimeSlotsInDay = getSlots('01:00', '00:00')

  const triggerBookAppointmentState = () => {
    //var finalDateTime = new Date(datePicked.setHours(0,0,0,0));
    console.log(alreadyTakenSlots);
    setBookAppointment(true)
  }

  //timeSlots = getSlots('01:00', '23:59');
  // console.log('timeSlots ', timeSlots);



  return (
    <div>
      {!bookAppointment && (
        <div className="slots">
          {allTimeSlotsInDay.map((slot, index) => (
            <button className="timeStop" key={index} onClick={triggerBookAppointmentState}>
              {slot}
            </button>
          ))}
        </div>
      )}
      {bookAppointment && (
      <ConfirmationDetails />
      )}

    </div>


  )
}

export default TimeSlots
