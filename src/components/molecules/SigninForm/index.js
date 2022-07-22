import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Gap, Input, Button } from '../../atoms';

const SignInForm = () => {
    const navigate = useNavigate()
  return (
    <div className='px-6'>
        <Gap height={26}/>
        <Input label='Email Address' placeholder='Type your email address'/>
        <Gap height={16}/>
        <Input label='Password' type='password' placeholder='Type your password'/>
        <Gap height={24}/>
        <Button label='sign in' onClick={() => navigate('/')}/>
        <Gap height={12}/>
        <Button labelColor='white' background='bg-gray-700' label='Google'/>
        <Gap height={12}/>
        <Button labelColor='white' background='bg-gray-700' label='Create new account' onClick={() => navigate('/sign-up')}/>

    </div>
  )
}

export default SignInForm