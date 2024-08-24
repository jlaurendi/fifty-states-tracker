import React from "react"
import "./UserGoalModalComponent.css"

const UserGoalModalComponent = ({ isOpen, onClose, selectedState }) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">{selectedState} Goal</h2>
                <p>Information about state to go here</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default UserGoalModalComponent