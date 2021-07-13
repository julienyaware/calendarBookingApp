import React, { useState } from 'react'
import db from '../services/Db'
import TimeSlots from './TimeSlots';

function ConfirmationDetails({selectedSlotDateAndTime}) {

  const [reason, setReason] = useState("")
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [showTimeSlots, setShowTimeSlots] = useState(false)

  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    db.collection("confirmations").add({
      Time: time,
      Reason: reason
    })
      .then((docRef) => {
        alert("Appointment with mentor confirmed on: \n"+ selectedSlotDateAndTime +"\nReason for appointment is :\n" + reason )
        refreshPage()
      })
      .catch((error) => {
        console.error("Error booking appointment: ", error)
        alert("Error booking appointment: ", error)
      });
  }

  const triggerShowTimeSlots = () => {
    setShowTimeSlots(true)
  }

  const refreshPage = () => {
    window.location.reload()

  }
  return (
    <div>
      {!showTimeSlots && (
        <center className="confirmationForm">
          <button className="backButton" onClick={refreshPage}>pick a different time slot</button>
          <form
            onSubmit={(event) => { sub(event) }}>
            <label>Reason for booking an appointment:</label>
            <br />
            <textarea type="text" placeholder="your reason" required
              onChange={(e) => { setReason(e.target.value) }}></textarea>
            <br /><br />
            <label>Selected time slot:</label>
            <br />
            <textarea disabled type="text" placeholder={selectedSlotDateAndTime}
              onChange={(e) => { setTime(JSON.stringify({selectedSlotDateAndTime}))} }></textarea>
            <br /><br />
            <button className="timeStop" type="submit">Submit</button>
          </form>
        </center>
      )}

      {showTimeSlots && (
        <TimeSlots />
      )}

    </div>

  )
}

export default ConfirmationDetails
