import * as React from 'react';

export default function Form(){
    return (
    <div>
        <h1>Welcome Back!</h1>
        <p>Please Enter Your Details.</p>
        <div>
            <div>
                <label>Email</label>
                <input
                  className=''
                  placeholder='Enter Your Email'
                />
            </div>
        </div>
    </div>
    ); 
}