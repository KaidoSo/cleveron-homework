import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSignupSuccess from './FormSignupSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
            { !formIsSubmitted ? (
                <FormSignup submitForm={submitForm} />
            ) : (
                <FormSignupSuccess />
            )}
        </div>
    );
};

export default Form