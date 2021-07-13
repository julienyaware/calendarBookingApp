import React, { useState } from 'react'
import moment from 'moment'
import ConfirmationDetails from './ConfirmationDetails'



let allTimeSlotsInDay = []

function TimeSlots() {

  const [bookAppointment, setBookAppointment] = useState(false)

  const getSlots = (start, end) => {
    const startTime = moment(start, 'HH:mm');
    const endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    let timeSlots = [];

    while (startTime <= endTime) {
      timeSlots.push(new moment(startTime).format('HH:mm'));
      startTime.add(1, 'hours');
    }
    return timeSlots;
  }
  allTimeSlotsInDay = getSlots('01:00', '00:00')

  const triggerBookAppointmentState = () => {
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
