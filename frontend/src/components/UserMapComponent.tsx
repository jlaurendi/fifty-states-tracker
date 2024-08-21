import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import USAMap from "react-usa-map"

interface UserMapComponentProps {
    userName: string,
    statesToGoals: string
}

const UserMapComponent: FC<UserMapComponentProps> = ({userName, statesToGoals}) => {
    const [states, setStates] = useState({})

    useEffect(() => {
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
      // TODO: do something interesting
    }

    const userId = 1 // hardcoded for now
    // const statesCustomConfig = () => {
    //     return {
    //       "NJ": {
    //         fill: "navy",
    //         clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
    //       },
    //       "NY": {
    //         fill: "#CC0000"
    //       }
    //     };
    //   };
    

    return (
        <>
            <div>{userName}'s Marathon Map</div>
            <div>{statesToGoals}</div>
            <USAMap onClick={mapHandler} customize={states} />
        </>
    )
}

export default UserMapComponent