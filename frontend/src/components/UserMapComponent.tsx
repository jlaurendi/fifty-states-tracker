import React, { FC } from "react"
import USAMap from "react-usa-map"

interface UserMapComponentProps {
    userName: string,
    statesToGoals: string
}

const UserMapComponent: FC<UserMapComponentProps> = ({userName, statesToGoals}) => {
    const mapHandler = (event) => {
        alert(event.target.dataset.name);
    }
    
    const statesCustomConfig = () => {
        return {
          "NJ": {
            fill: "navy",
            clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
          },
          "NY": {
            fill: "#CC0000"
          }
        };
      };
    

    return (
        <>
            <div>{userName}'s Marathon Map</div>
            <div>{statesToGoals}</div>
            <USAMap onClick={mapHandler} customize={statesCustomConfig()} />
        </>
    )
}

export default UserMapComponent