import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('This is required field'),
    lastName: Yup.string().required('This is required field')
});

function Uncontrolled() {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };
    const handleSubmit =  (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const inputVal = formData.get('email');

        alert(inputVal);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} name='email' />
            <button onClick={focusInput}>Focus Input</button>
            <button type="submit">Send</button>
        </form>
    );
}

export default function App() {
    return (
        <div className='formik-form'>
            <h2>Sign Up</h2>
            <Formik
                initialValues={{
                    email: "",
                    firstName: "",
                    lastName: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 1500);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor='First name'>firstName</label>
                        <div>
                            <Field name="firstName" placeholder="Enter First Name" type="text" />
                            <ErrorMessage
                                name='firstName'
                                component="div"
                                className='error-message'
                            />
                        </div>
                        <label htmlFor='Last name'>lastName</label>
                        <div>
                            <Field name="lastName" placeholder="Enter Last Name" type="text" />
                            <ErrorMessage
                                name='lastName'
                                component="div"
                                className='error-message'
                            />
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
            <Uncontrolled />
        </div>
    );
}
