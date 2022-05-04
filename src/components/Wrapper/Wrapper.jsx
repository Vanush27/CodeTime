import React from 'react';
import "./Wrapper.css";
import Form from "../Form/Form";

import layoutImg from '../../img/layout.png'

const Wrapper = () => {
    return (
        <div className='layout'>
            <div className='left'>
                <img src={layoutImg} alt='layout' />
                <div className='infos'>
                <h1>Turn your ideas into reality</h1>
                <p>Start for free and get attractive offers from the community</p>
            </div>
        </div>
            <div className='right'>
                <Form/>
            </div>
        </div>

    );
};

export default Wrapper;