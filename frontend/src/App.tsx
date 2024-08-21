import React, { useState, FC } from 'react'
import './App.css'
import UserMapComponent from './components/UserMapComponent'

const App: FC = () => {
  const userName = "Joe"
  const statesToGoals = "map goes here!"
  return (
    <>
      <UserMapComponent userName={userName} statesToGoals={statesToGoals} />
    </>
  )
}

export default App