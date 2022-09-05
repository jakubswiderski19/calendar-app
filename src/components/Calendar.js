import React from 'react'
import Day from './Day';

const Calendar = ({year,month,events}) => {

const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysArray = ["Mon.","Tues.","Wed.","Thurs.","Fri.","Sat.","Sun."];



const getDaysInMonth = (year,month) =>
{
    let daysArray = [];
    let dateObject = new Date(year, month, 1);
    while(month === dateObject.getMonth())
    {
        daysArray.push(new Date(dateObject));
        dateObject.setDate(dateObject.getDate() + 1);
    }
    return daysArray;
}

let days = getDaysInMonth(year,month);

  return (
    <div className='shadow-xl rounded-lg p-8 bg-gray-300/[0.1]'>
        <h1 className='text-center'>{monthsArray[month]} {year}</h1>
        <div className='grid grid-cols-7'>
            {daysArray.map((day,i) => {
                return(
                    <div className='text-center' key={i}>
                        {day}
                    </div>
                );
            })}

            {days.map((day,i) => {
                let className = '';
                let event = {};
                switch (day.getDay()) {
                    case 0:
                        className="col-start-7"
                        break;
                    case 1:
                        className="col-start-1"
                        break;
                    case 2:
                        className="col-start-2"
                        break;
                    case 3:
                        className="col-start-3"
                        break;
                    case 4:
                        className="col-start-4"
                        break;
                    case 5:
                        className="col-start-5"
                        break;
                    case 6:
                        className="col-start-6"
                        break;
                    default:
                        break;
                    
                }

                events.forEach(eventObj => {
                    if(eventObj.date.getDate() === day.getDate() && eventObj.date.getMonth() === day.getMonth() && eventObj.date.getFullYear() === day.getFullYear())
                    {
                        event = {...eventObj};
                    }
                });

                return(
                    <Day className={className} key={i} event={event} day={day}>
                        {day.getDate()}
                    </Day>
                );
                
            })}
        </div>
    </div>
  )
}

export default Calendar