import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import USAMap from "react-usa-map"
import UserGoalModalComponent from "./UserGoalModalComponent"

interface UserMapComponentProps {
    userName: string,
    statesToGoals: string
}

const UserMapComponent: FC<UserMapComponentProps> = ({userName, statesToGoals}) => {
    const [states, setStates] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedState, setSelectedState] = useState('')

    useEffect(() => {
        const userId = 1 // hardcoded for now
        axios.get(`http://localhost:3000/users/${userId}/goals`)
        .then(response => {
            const userGoals = response.data
            setStates(formatStatesData(userGoals))
        })
        .catch(error => {
            console.log("Error:", error)
        })        
    }, [])

    const formatStatesData = (data) => {
        const formattedData = {}

        Object.keys(data).forEach(key => {
            formattedData[data[key]["state"]] = {
                fill: "#CC0000"
            }
        })

        return formattedData
    }

    const mapHandler = (event) => {
      setModalOpen(true)
      setSelectedState(event.target.dataset.name)
      console.log(event)
    }

    const onClose = (event) => {
        setModalOpen(false)
    }

    return (
        <>
            <div>{userName}'s Marathon Map</div>
            <div>{statesToGoals}</div>
            <USAMap onClick={mapHandler} customize={states} />
            <UserGoalModalComponent isOpen={modalOpen} onClose={onClose} selectedState={selectedState} />
        </>
    )
}

export default UserMapComponent