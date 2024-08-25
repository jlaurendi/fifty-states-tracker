import React, { FC } from 'react';
import './UserGoalModalComponent.css';

interface UserGoal {
  target_date: string;
  status: string;
}

interface UserGoalModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
    selectedState: string | null;
    userGoal: UserGoal;
}

const UserGoalModalComponent: FC<UserGoalModalComponentProps> = ({ isOpen, onClose, selectedState, userGoal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{selectedState} Marathon</h2>
        <p>Target date: {userGoal?.target_date}</p>
        <p>Status: {userGoal?.status}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserGoalModalComponent;
