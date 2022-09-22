import React from 'react'

function DateBar() {
    const d= new Date()
    const days = {
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
        0:"Sunday"
    }
    console.log(d.getDay());
  return (
    <div className='bar'>
      <h1>{days[d.getDay()]}</h1>
      <h1>{d.getDate()} : {d.getMonth()} : {d.getFullYear()}</h1>

    </div>
  )
}

export default DateBar
