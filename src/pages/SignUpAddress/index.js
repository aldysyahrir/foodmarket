import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthHeader, Gap, SignUpAddressForm } from '../../components'

const SignUpAddress = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col w-full'>
        <AuthHeader withArrowLeft tittle='Address' desc="make sure it's valid" onClick={() => navigate("/sign-up")}/>
        <Gap height={24} className="bg-gray-100"/>
        <SignUpAddressForm/>
    </div>
  )
}

export default SignUpAddress