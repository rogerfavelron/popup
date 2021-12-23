import React from 'react';
import './Settings.css';
import {useDispatch} from 'react-redux';
import { setHeadline,setDescription,setSuccessMessage } from '../../Redux/settingsSlice';

const Settings = () => {
    const dispatch = useDispatch();

    const handleHeadline = (e) =>{
        const value = e.target.value;
        dispatch(setHeadline(value));
    }
    const handleDescription = (e) =>{
        const value = e.target.value;
        dispatch(setDescription(value));
    }
    const handleSuccessMessage = (e) =>{
        const value = e.target.value;
        dispatch(setSuccessMessage(value));
    }

    return (
        <div className="settings">
        <div className="settings__title">
            General Settings
        </div>
        <div className="settings__input__wrapper">
            <div className="settings__input__title">
                Headline
            </div>
            <input type="text" className="settings__input" onChange={handleHeadline}  maxLength={18}/>
        </div>
        <div className="settings__input__wrapper">
            <div className="settings__input__title">
                Description
            </div>
            <textarea className="settings__input settings__input__textarea" onChange={handleDescription} maxLength={65}></textarea>
        </div>
        <div className="settings__input__wrapper">
            <div className="settings__input__title">
                Success Message
            </div>
            <input type="text" className="settings__input"  onChange={handleSuccessMessage}  maxLength={18}/>
        </div>
        </div>
    )
}

export default Settings
