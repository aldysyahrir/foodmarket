import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Gap, Input } from '../../atoms'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { globalAllertAction, registerDataSelector, userIsloadingAction } from "../../../redux"
import { user } from "../../../configs/constans"
import { setAuthorizationHeaders } from '../../../configs/axios'

const SignUpAddressForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const registerData = useSelector(registerDataSelector, shallowEqual);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");

  const onSubmit = () => {
    const data = {
      ...registerData,
      phone: Number(phone),
      address,
      house_number: houseNumber,
      city,
    };

    dispatch(userIsloadingAction(true))
    user
      .register(data)
      .then(res => {
        setAuthorizationHeaders(res.data.token);
        dispatch(userIsloadingAction(false))
        navigate('/success-sign-up')
      })
      .catch((err) => {
        const { message } = err.response.data;
        if(message === "email already exist") {
          navigate("/sign-up")
        }
        dispatch(globalAllertAction({ show: true, message }));
        dispatch(userIsloadingAction(false));
      })

  };

  return (
    <div className='px-6'>
      <Gap height={26} />
      <Input value={phone} onChange={e => setPhone(e.target.value)} label='Phone No.' placeholder='Type your phone number' type='number' />
      <Gap height={16} />
      <Input value={address} onChange={e => setAddress(e.target.value)} label='Address' placeholder='Type your address' />
      <Gap height={16} />
      <Input value={houseNumber} onChange={e => setHouseNumber(e.target.value)} label='House No.' placeholder='Type your house number' />
      <Gap height={16} />
      <Input value={city} onChange={e => setCity(e.target.value)} label='City' placeholder='Type your city' />
      <Gap height={24} />
      <Button label='Sign Up Now' onClick={onSubmit} />
    </div>

  )
}

export default SignUpAddressForm