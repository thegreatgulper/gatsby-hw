import React from 'react';
import {navigate} from 'gatsby'
import Header from "../components/Header"

const Test = () => (
    <div>
        <Header/>
        <h1>this is test site</h1>
        <button onClick={()=>navigate('/')}>Go Back to homepage</button>
    </div>
);


export default Test;