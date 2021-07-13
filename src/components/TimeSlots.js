import React, { useState } from 'react'
import moment from 'moment'
import ConfirmationDetails from './ConfirmationDetails'


let allTimeSlotsInDay = []

function TimeSlots({ alreadyExistingAppointments, datePicked }) {

  const [bookAppointment, setBookAppointment] = useState(false)

  const alreadyTakenSlots = alreadyExistingAppointments.calendar.map(
    (slot) => new Date(Date.parse(slot.date_time))
  );


  let selectedDate = moment(datePicked).format("YYYY-MM-DD");


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

  const triggerBookAppointmentState = (slot) => {
    const start = new Date(selectedDate + " " + slot)
    const end = new Date(selectedDate + " " + moment(slot, 'HH:mm').add(1, 'hours').format('HH:mm'))

    const isBooked = alreadyTakenSlots.some((slot) => {

      return start <= slot && slot < end;
    });
    console.log(isBooked)
    console.log(start)

  }

  return (
    <div>
      {!bookAppointment && (
        <div className="slots">
          {allTimeSlotsInDay.map((slot, index) => (
            <button className="timeStop" key={index} onClick={() => triggerBookAppointmentState(slot)}>
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