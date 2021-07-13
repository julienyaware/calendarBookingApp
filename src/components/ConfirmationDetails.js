import React, { useState } from 'react'
import db from '../services/Db'
import TimeSlots from './TimeSlots';

function ConfirmationDetails() {

  const [reason, setReason] = useState("")
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [showTimeSlots, setShowTimeSlots] = useState(false)

  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    db.collection("data").add({
      Name: name,
      Time: time,
      Reason: reason
    })
      .then((docRef) => {
        alert("Appointment with mentor confirmed")
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
          <button className="timeStop" onClick={triggerShowTimeSlots}>Select another time slot</button>
          <form
            onSubmit={(event) => { sub(event) }}>
            <label>User Name:</label>
            <br />
            <input type="text" placeholder="your name" required
              onChange={(e) => { setName(e.target.value) }} />
            <br /><br />
            <label>Reason for booking an appointment:</label>
            <br />
            <textarea type="text" placeholder="your reason" required
              onChange={(e) => { setReason(e.target.value) }}></textarea>
            <br /><br />
            <label>Selected time slot:</label>
            <br />
            <input type="text" placeholder="Time"
              onChange={(e) => { setTime(e.target.value) }} />
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
