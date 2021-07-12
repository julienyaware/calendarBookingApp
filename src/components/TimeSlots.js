import React from 'react'
import moment from 'moment'

let allTimeSlotsInDay = []

function TimeSlots() {
    const getSlots = (start, end) => {
    const startTime = moment(start, 'HH:mm');
    const endTime = moment(end, 'HH:mm');

    if( endTime.isBefore(startTime) ){
        endTime.add(1, 'day');
      }
    
      let timeSlots = [];
    
      while(startTime <= endTime){
        timeSlots.push(new moment(startTime).format('HH:mm'));
        startTime.add(1, 'hours');
      }
      return timeSlots;
    }
    allTimeSlotsInDay = getSlots('01:00', '00:00')

     //timeSlots = getSlots('01:00', '23:59');
      // console.log('timeSlots ', timeSlots);


 
    return (
        <div className="slots">
        {allTimeSlotsInDay.map((slot, index) => (
          <div className="timeStop" key={index}>
            <span>{slot}</span>
          </div>
        ))}
      </div>
        
    )
}

export default TimeSlots
