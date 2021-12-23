import React, { useState, useEffect } from 'react';
import './Popup.css';
import errorVector from '../../Assets/error.svg';
import { useSelector,useDispatch } from 'react-redux';
import { selectSettings } from '../../Redux/settingsSlice';
import axios from '../../utils/axios';
import {setName,setEmail,setFont,setIsSuccessfullySubmitted, selectPersonalData} from '../../Redux/personalDataSlice';


const Popup = () => {
    const dispatch = useDispatch();
    const personalData = useSelector(selectPersonalData);
    const settings = useSelector(selectSettings);
    const headline = settings.headline;
    const description = settings.description;
    const email = personalData.email;

    const [totalFonts, setTotalFonts] = useState([]);

    const nameHandler = (e) => {
        const value = e.target.value;
        dispatch(setName(value))
    }
    const emailHandler = (e) => {
        const value = e.target.value;
        dispatch(setEmail(value))
    }
    const fontHandler = (e) => {
        const value = e.target.value;
        dispatch(setFont(value));
    }
    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();//get the cancel source

        const getFunction = async () => {
            try {
                //Get the data from server, add cancel source to cancelTokenSourceuest
                const result = await axios.get('/', { cancelToken: cancelTokenSource.token });
                const data = result.data;
                console.log("data is fetched", data)
                //Sort alphabetically
                data.sort((a, b) => {
                    if (a.family < b.family) return -1;
                    if (a.family > b.family) return 1;
                    return 0;
                })
                //Filter
                const filteredData = data.filter(x => x.category !== "monospace");
                console.log("fonts data", filteredData);
                setTotalFonts(filteredData);
            }
            catch (error) {
                console.error(error.message);
            }
        }
        getFunction();
        //Cleanup useEffect
        return () => { cancelTokenSource.cancel() };//cleanup with cancel 
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setIsSuccessfullySubmitted(true))
    }

    return (
        <div className="popup__wrapper">
            <div className="popup">
                <div className="popup__title">
                    {headline}
                </div>
                <div className="popup__promotion">
                    {description}
                </div>

                <form className="popup__form" onSubmit={submitHandler}>
                    <input placeholder='Your name' type="text" className="popup__form__element input" onChange={nameHandler} required />
                    {/*The better use may be setting type="email" but for this project, we use custom error messages */}
                    <input placeholder='Email' type="text" className="popup__form__element input" onChange={emailHandler} required />
                    <span className="popup__form__error">{email.isEmailValid !== true ? <img alt="" src={errorVector} /> : null} {email.email !== "" ? email.isEmailValid ? null : "Invalid email address" : "This field is required"}</span>
                    <select name="font" placeholder='Select Font' className="popup__form__element select" onChange={fontHandler} required>
                        <option value="">Select Font</option>
                        {totalFonts.map((font, index) => {
                            return <option value={font.family} key={index}>{font.family}</option>

                        })}

                    </select>
                    <input type="submit" className="popup__form__element button" value="GET MY 30% OFF" />

                </form>
            </div>
        </div>
    )
}

export default Popup
