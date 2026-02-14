import React from 'react'

const UserCards = (props) => {
  return (
    <div className="flex-1 min-w-[320px] bg-base-300 rounded-xl p-5">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Country: Uzbekistan</p>
    </div>
  )
}

export default UserCards