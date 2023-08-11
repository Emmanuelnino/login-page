import * as React from 'react';

export default function Form() {
    return (
        <div className='bg-white rounded-3xl px-10 py-20 border-2 border-gray-200'>
            <h1 className='text-4xl font-semibold'>Hey There,</h1>
            <h1 className='text-4xl font-semibold mt-4'>Welcome Back!</h1>
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
                <div className=' mt-8 flex justify-between items-center'>
                    <div>
                        <input

                            type="checkbox"
                            id='remember'

                        />
                        <label className="ml-2 font-medium text-base" for="Remember">Remember For 30 Days</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Forgot Password </button>

                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign Up</button>
                    <button className='py-3 border-2 border-gray-100 flex justify-center items-center gap-2 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="2.5em"
                            width="2.5em"
                           
                        >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                        </svg>
                        Sign Up With Google</button>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <p>Don't have an account?</p>
                <button>Sign up</button>
                </div>
            </div>
        </div>
    );
}