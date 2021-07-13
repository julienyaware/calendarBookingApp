import React, { useState,useEffect }  from 'react'
import Calendar from 'react-calendar'
import TimeSlots from './TimeSlots'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css'

function CfCalendar() {
    
  const [date,setDate] = useState(new Date())
  const [showTimeSlots, setShowTimeSlots] = useState(false)
  const [existingAppointments,setExistingAppointments] = useState({})

  // Get data on already booked appointments
  async function fetchData() {
    try {
     const  result = await axios.get("https://private-37dacc-cfcalendar.apiary-mock.com/mentors/1/agenda")
    setExistingAppointments(result.data)
    console.log(existingAppointments);
     setShowTimeSlots(true)
    } catch (error) {
      alert('Please check your internet connection:',error)
    }
  }


    const onChange = date => {
      setDate(date)
      fetchData()
    
    }

  
    return (
        <div className="App-Content">
        <Calendar
         minDate = {new Date()}
         onChange={onChange}
         value={date}
        />
        {showTimeSlots ?  <TimeSlots alreadyExistingAppointments={existingAppointments} datePicked={date}/> : null}  
        {console.log(date)}
      </div>
    )
}

export default CfCalendar
