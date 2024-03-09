import React from 'react'
import Children from './Children'

const PropsDrilling = ({student, counter}) => {
    console.log(student)
  return (
    <div>
      <Children student={student} counter={counter}/>

      <div>
        {student.map((std) => (
            <h1>{std}</h1>
        ))}
      </div>
    </div>
  )
}

export default PropsDrilling
