import React, { useEffect, useState } from 'react'



export default ({ setTime }) => {
  const [date, setDate] = useState();

  const clock = () => {
    let now = new Date().toLocaleTimeString()
    setDate(now)
    setTime(now)
  }
  useEffect(() => {
    setInterval(clock, 1000)
  }, [])

  return <h1>{date}</h1>
}