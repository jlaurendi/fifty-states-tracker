import React from "react"
import "./UserGoalModalComponent.css"

const UserGoalModalComponent = ({ isOpen, onClose, selectedState }) => {
    if (!isOpen) return null

    return (
        <div className="modalOverlay">
            <h2 className="modalTitle">{selectedState} Goal</h2>
            <p>Information about state to go here</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default UserGoalModalComponent