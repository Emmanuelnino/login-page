import * as React from 'react';

export default function Form(){
    return (
    <div className='bg-white rounded-3xl px-10 py-20 border-2 border-gray-200'>
        <h1 className='text-4xl font-semibold'>Hey There,</h1>
        <h1 className='text-4xl font-semibold mt-4'>Welcome <span className='text-violet-500'>Back!</span></h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Please Enter Your Details.</p>
        <div className='mt-8'>
            <div>
                <label
                className='text-lg font-medium'>Email</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Your Email'
                />
            </div>
            <div>
                <label className='text-lg font-medium'>Password</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Your Password'
                  type='Password'
                />
            </div>
            <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input

                    type="checkbox"
                    id='remember'

                    />
                    <label className="ml-2 font-medium text-base" for="Remember">Remember For 30 Days</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forgot Password </button>
            </div>
        </div>
    </div>
    ); 
}