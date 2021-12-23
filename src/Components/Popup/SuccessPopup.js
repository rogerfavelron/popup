import React from 'react';
import './Popup.css';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../Redux/settingsSlice';
import SuccessVector from '../../Assets/success.svg';

const SuccessPopup = () => {
    const settings = useSelector(selectSettings);
    const successMessage = settings.successMessage;

    return (
        <div className="popup__wrapper">
            <div className="popup">
                <img alt="" className="successPopup__image" src={SuccessVector}/>
                <div className="successPopup__text">{successMessage}</div>
            </div>
        </div>
    )
}

export default SuccessPopup
