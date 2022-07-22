import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Gap, SignUpAddressForm } from '../../components'

const SignUpAddress = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col w-full'>
        <Header withArrowLeft tittle='Address' desc="make sure it's valid" onClick={() => navigate("/sign-up")}/>
        <Gap height={24} className="bg-gray-100"/>
        <SignUpAddressForm/>
    </div>
  )
}

export default SignUpAddress