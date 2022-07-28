import React, { useEffect, useState } from 'react'



export default ({ data }) => {
  useEffect(() => { }, [data])
  return (

    <div className="card">
      <div className="card-body">
        {data.map(v => v).join(",")}
      </div>
    </div>
  )



}