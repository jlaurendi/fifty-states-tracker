import React, { FC } from 'react';
import './UserGoalModalComponent.css';

interface UserGoalModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
    selectedState: string | null;
}

const UserGoalModalComponent: FC<UserGoalModalComponentProps> = ({ isOpen, onClose, selectedState }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{selectedState} Marathon</h2>
        <p>Information about state to go here</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserGoalModalComponent;
