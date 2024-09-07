import React from 'react'

const DashboardScreen = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user && user.name;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default DashboardScreen