import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HandleAPI from './HandleAPI';

function Feedback() {

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [handleAPIFlag, setHandleAPIFlag] = useState(false);
    const [flag, setFlag] = useState(false);
    const options = [
        { value: 'excellecnt', label: 'Excellent' },
        { value: 'good', label: 'Good' },
        { value: 'average', label: 'Average' },
        { value: 'fair', label: 'Fair' },
        { value: 'poor', label: 'Poor' },
    ];

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const funcAPI = (val) => {
        setHandleAPIFlag(true);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    const handleChange4 = (event) => {
        setSelectedOption4(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("selected option1", selectedOption1)
        console.log("selected option2", selectedOption2)
        console.log("selected option3", selectedOption3)
        console.log("selected option4", selectedOption4)
        if(selectedOption1!=="" && selectedOption2!=="" && selectedOption3!=="" && selectedOption4!==""){
            setHandleAPIFlag(true);
        }
        // Submit the feedback data to the server

        // Show the "thank you" message
        setSubmitted(true);
    };



    return (
        <div>
            <div className="container">
                <h2>FEEDBACK</h2>
            </div>
            {submitted ? (
                <div className='contact-form'>
                    <p>Thank you for your response!</p><br />
                    <button type='submit'><Link to="/">Back to home</Link></button>
                    <HandleAPI option1 = {selectedOption1} option2 = {selectedOption2} option3 = {selectedOption3} option4 = {selectedOption4} funcName = "feedbackAPI" responseData = {funcAPI}/>
                </div>
            ) : (
                <div className='feedback'>
                    <form name="feedback-form" onSubmit={handleSubmit}>
                        <div className="contact-form">
                            <div className='feed-lable'><label>How was your experience with our website?</label></div>
                            <div className="radio-buttons">
                                {options.map((option) => (
                                    <div key={option.value}>
                                        <input
                                            type="radio"
                                            name="website-experience"
                                            value={option.value}
                                            checked={selectedOption1 === option.value}
                                            onChange={handleChange1}
                                        />
                                        <label>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-form">
                            <label>How likely are you to recommend our website to a friend or colleague?</label>
                            <div className="radio-buttons">
                                {options.map((option) => (
                                    <div key={option.value}>
                                        <input
                                            type="radio"
                                            name="website-recommendation"
                                            value={option.value}
                                            checked={selectedOption2 === option.value}
                                            onChange={handleChange2}
                                        />
                                        <label>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-form">
                            <label>How was your experience with our customer service?</label>
                            <div className="radio-buttons">
                                {options.map((option) => (
                                    <div key={option.value}>
                                        <input
                                            type="radio"
                                            name="customer-service-experience"
                                            value={option.value}
                                            checked={selectedOption3 === option.value}
                                            onChange={handleChange3}
                                        />
                                        <label>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-form">
                            <label>How likely are you to visit us again in the future?</label>
                            <div className="radio-buttons">
                                {options.map((option) => (
                                    <div key={option.value}>
                                        <input
                                            type="radio"
                                            name="future-purchase"
                                            value={option.value}
                                            checked={selectedOption4 === option.value}
                                            onChange={handleChange4}
                                        />
                                        <label>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='contact-form'>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    {submitted && <HandleAPI option1 = {selectedOption1} option2 = {selectedOption2} option3 = {selectedOption3} option4 = {selectedOption4} funcName = "feedbackAPI" responseData = {funcAPI}/>}
                </div>
            )}
           
        </div>
    );
}

export default Feedback;