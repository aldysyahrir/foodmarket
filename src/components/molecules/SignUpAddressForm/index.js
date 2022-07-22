import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Gap, Input } from '../../atoms'

const SignUpAddressForm = () => {
    const navigate = useNavigate()
  return (
    <div className='px-6'>
        <Gap height={26}/>
        <Input label='Phone No.' placeholder='Type your phone number' type='number'/>
        <Gap height={16}/>
        <Input label='Address' placeholder='Type your address'/>
        <Gap height={16}/>
        <Input label='House No.' placeholder='Type your house number'/>
        <Gap height={16}/>
        <Input label='City' placeholder='Type your city'/>
        <Gap height={24}/>
        <Button label='Sign Up Now' onClick={() => navigate('/')}/>
    </div>

  )
}

export default SignUpAddressForm