import React from "react";
import "./Form.css";
import {ValidationSchemaExample} from "../LoginFormik";
import cross from "../../img/cross.png";
import {Button} from "react-bootstrap";

import Google from "../../img/google.png";
import {Link} from "react-router-dom";

const Form = () => {

    return (
        <div className="form">

            <div className="cross">
                <img src={cross} alt=""/>
            </div>
            <h1>Login to your Account </h1>
            <p>See what is going on with your business</p>

            <Button type="button" className="btn-google">
                <div className="image-google">
                    <img src={Google} alt="Google"/>
                </div>
                <p className="p-google">Continue with Google </p>
            </Button>

            <div className="sign-email">
                ------------  or Sign in with Email  ------------
            </div>

            <ValidationSchemaExample/>

            <div>
                <p className="not-register">Not Registered Yet?
                    <Link className="create-account" to="/create">Create an account</Link>
                </p>
            </div>


        </div>
    )
}

export default Form;