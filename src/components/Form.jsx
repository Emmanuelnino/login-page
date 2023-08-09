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
            <div>
                <label>Password</label>
                <input
                  className=''
                  placeholder='Enter Your Password'
                  type='Password'
                />
            </div>
            <div>
                <div>
                    <input

                    type="checkbox"
                    id='remember'

                    />
                    <label for="Remember">Remember For 30 Days</label>
                </div>
            </div>
        </div>
    </div>
    ); 
}