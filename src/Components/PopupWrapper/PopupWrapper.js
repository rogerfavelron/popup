import React from 'react';
import './PopupWrapper.css';
import {Popup} from '../Popup';
import { SuccessPopup } from '../Popup';
import {useSelector} from 'react-redux';
import { selectPersonalData } from '../../Redux/personalDataSlice';


const PopupWrapper = () => {
    const personalData = useSelector(selectPersonalData);
    const isSuccess = personalData.isSuccessfullySubmitted;
    console.log("isSuccess",isSuccess);

    return (
        <div className="popupWrapper">
            {isSuccess?<SuccessPopup/>:<Popup/>}
        </div>
    )
}

export default PopupWrapper
