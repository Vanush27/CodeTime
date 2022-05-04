import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button} from "react-bootstrap";
import "./LoginFormik.css";
import {Link} from "react-router-dom";


const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
});

export const ValidationSchemaExample = () => (

    <>

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({errors, touched}) => (
                <Form>

                    <label htmlFor="">Email</label>
                    <Field name="email" type="email"/>
                    {errors.email && touched.email ? console.log(errors.email) : null}

                    <label htmlFor="">Password</label>
                    <Field name="password" type="password"/>
                    {errors.password && touched.password ? console.log(errors.password) : null}

                    <div className="remember">
                        <div className="checkbox">
                            <Field name="checkbox" type="checkbox"/>
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <div>
                            <Link to="/forget">
                                <p className="forget">Forgot Password?</p>
                            </Link>
                        </div>
                    </div>

                    <div>

                    </div>
                    <Button as="input" type="submit" value="Login" className="subBtn"/>
                </Form>
            )}
        </Formik>
    </>
);