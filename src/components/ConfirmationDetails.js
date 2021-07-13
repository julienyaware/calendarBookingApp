import React, {useState} from 'react'
import db from '../services/Db'
import TimeSlots from './TimeSlots';

function ConfirmationDetails() {

    const [reason, setReason] = useState("")
    const [name  , setName] = useState("");
    const [time , setTime] = useState("");
    const [showTimeSlots,setShowTimeSlots] = useState(false)

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
      })
      .catch((error) => {
          console.error("Error booking appointment: ", error)
          alert("Error booking appointment: ", error)
      });
  }

  const triggerShowTimeSlots = ()=>{
    setShowTimeSlots(true)
  }
    return (
        <div>
          {!showTimeSlots && (
            <center>
             <button className="timeStop" onClick={triggerShowTimeSlots}>Select another time slot</button>
                <form 
                  onSubmit={(event) => {sub(event)}}>
                    <input type="text" placeholder="your name"
                      onChange={(e)=>{setName(e.target.value)}} />
                      <br/><br/>
                    <textarea type="text" placeholder="your reason"
                      onChange={(e)=>{setReason(e.target.value)}}></textarea>
                      <br/><br/>
                    <input type="text" placeholder="Time"
                      onChange={(e)=>{setTime(e.target.value)}}/>
                      <br/><br/>
                    <button className="timeStop" type="submit">Submit</button>
                </form>
            </center>
          )}

          {showTimeSlots &&(
            <TimeSlots/>
          )}
           
        </div>
        
    )
}

export default ConfirmationDetails
