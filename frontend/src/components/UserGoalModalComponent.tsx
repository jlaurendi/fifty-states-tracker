import React, { FC, useState } from 'react';
import './UserGoalModalComponent.css';
import { UserGoal } from 'types/user-goal'
import axios from 'axios';

interface UserGoalModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  selectedState: string | null;
  userGoal: UserGoal | null;
  onSave: (newGoal: UserGoal, userGoals: UserGoal[]) => void;
}

const UserGoalModalComponent: FC<UserGoalModalComponentProps> = ({
  isOpen,
  onClose,
  selectedState,
  userGoal,
  onSave,
}) => {
  if (!isOpen) return null;
  const [isEditing, setIsEditing] = useState(false);
  // const [currUserGoal, setCurrUserGoal] = useState(userGoal);

  const handleSave = async (event) => {
    event.preventDefault();

    const formElement = document.querySelector('#create-goal-form') as HTMLFormElement;
    const formData = new FormData(formElement);

    // Create a mapping from frontend field names to backend field names
    const fieldMapping = {
      name: 'name',
      state: 'state',
      targetDate: 'target_date'
    };


    // Convert FormData to a plain object
    const formObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      const backendKey = fieldMapping[key] || key;
      formObject[backendKey] = value as string;
    });
    const goalObject = { goal: formObject };

    await axios
      .post(
        `http://localhost:3000/users/1/goals`, 
        goalObject,
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        const userGoals = response.data.userGoals;
        const newGoal = response.data.goal
        onSave(newGoal, userGoals);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!userGoal && (
          <>
            <h2 className="modal-title">
              Create a new goal for {selectedState}
            </h2>
            <p>No marathon or goal for {selectedState} yet. Add one now:</p>
            <form id="create-goal-form">
              <input name="name" type="text" placeholder="Enter goal name" />
              <input name="targetDate" type="date" placeholder="Enter target date" />
              <input name="state" type="hidden" value={selectedState} />
              <select name="status">
                <option value="tentative">Maybe</option>
                <option value="planned">Planned</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={handleSave}>Save</button>
            </form>

            <button onClick={onClose}>Close</button>
          </>
        )}
        {userGoal && !isEditing && (
          <>
            <h2 className="modal-title">{selectedState} Marathon</h2>
            <p>Target date: {userGoal?.target_date}</p>
            <p>Status: {userGoal?.status}</p>
            <button onClick={onClose}>Close</button>
          </>
        )}
        {userGoal && isEditing && (
          <>
            <h2 className="modal-title">{selectedState} Marathon</h2>
            <p>Target date: {userGoal?.target_date}</p>
            <p>Status: {userGoal?.status}</p>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserGoalModalComponent;
