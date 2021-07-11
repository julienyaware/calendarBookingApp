import React, { useState }  from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function CfCalendar() {
    const [date,setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
    }
    return (
        <div>
        <Calendar
         minDate = {new Date()}
          onChange={onChange}
          value={date}
        />
        {console.log(date)}
      </div>
    )
}

export default CfCalendar
