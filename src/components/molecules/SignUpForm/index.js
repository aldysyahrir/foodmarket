import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Gap, Input, Button } from '../../atoms';

const SignUpForm = () => {
    const navigate = useNavigate()
  return (
    <div className='px-6'>
         <Gap height={26}/>
         <div className='w-full flex justify-center items-center'>
            <div className='w-28 h-28 border border-dashed rounded-full flex justify-center items-center'>
                <div className='w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center'>
                    <p className='text-sm font-light text-gray-500'>
                        Add <br/> Photo</p>
                </div>
            </div>
         </div>
         <Gap height={16}/>
        <Input label='Full Name' placeholder='Type your full name'/>
        <Gap height={16}/>
        <Input label='Email Address' placeholder='Type your email address'/>
        <Gap height={16}/>
        <Input label='Password' type='password' placeholder='Type your password'/>
        <Gap height={24}/>
        <Button label='Continue' onClick={() => navigate('/sign-up-address')}/>

    </div>
  )
}

export default SignUpForm