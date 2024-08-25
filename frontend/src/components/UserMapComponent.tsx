import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import USAMap from 'react-usa-map';
import UserGoalModalComponent from './UserGoalModalComponent';

interface UserMapComponentProps {
  userName: string;
}

const UserMapComponent: FC<UserMapComponentProps> = ({
  userName
}) => {
  const [states, setStates] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedUserGoal, setSelectedUserGoal] = useState({});
  const [userGoals, setUserGoals] = useState([]);

  useEffect(() => {
    const userId = 1; // hardcoded for now
    axios
      .get(`http://localhost:3000/users/${userId}/goals`)
      .then((response) => {
        const userGoals = response.data;
        setUserGoals(formattedUserGoals(userGoals));
        setStates(formatStatesData(userGoals));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const formattedUserGoals = (data) => {
    return data.reduce((acc, elt) => {
      acc[elt.state] = elt;
      return acc;
    }, {});
  };

  const formatStatesData = (data) => {
    const formattedData = {};

    Object.keys(data).forEach((key) => {
      formattedData[data[key]['state']] = {
        fill: '#CC0000',
      };
    });

    return formattedData;
  };

  const mapHandler = (event) => {
    setModalOpen(true);
    setSelectedState(event.target.dataset.name);
    setSelectedUserGoal(userGoals[event.target.dataset.name]);
    // console.log(event);
    console.log(userGoals);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>{`${userName}'s Marathon Map`}</div>
      <USAMap onClick={mapHandler} customize={states} />
      <UserGoalModalComponent
        isOpen={modalOpen}
        onClose={onClose}
        selectedState={selectedState}
        userGoal={selectedUserGoal}
      />
    </>
  );
};

export default UserMapComponent;
