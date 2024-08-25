import React, { useState } from "react"
import "./UserGoalModalComponent.css"

const UserGoalModalComponent = ({ isOpen, onClose, selectedState }) => {
    const [mode] = useState('empty') 

    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">{selectedState} Marathon</h2>
                <p>Information about state to go here</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default UserGoalModalComponent