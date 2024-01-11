import React from 'react'
import assignment from '../Assets/assignment status.png'
import status from '../Assets/assignment status.png'
import student_record from '../Assets/student record.jpeg'

const Admindash = () => {
  return (
    <div className='admindash'>
        <div className="container">
            <div className="hrading">
                <h1> DASHBOARD</h1>
            </div>
            <div className="contents">
                <div className="logo1"><img src={assignment} alt=""/></div>
                <div className="logo2"><img src={status} alt=""/></div>
                <div className="logo3"><img src={student_record} alt=""/></div>
            </div>
        </div>
    </div>
  )
}

export default Admindash