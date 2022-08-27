import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Gap, Input, Button } from '../../atoms';
import { useDispatch } from "react-redux"
import { globalAllertAction, userIsloadingAction } from '../../../redux';
import { user } from '../../../configs/constans/user';
import { setAuthorizationHeaders } from '../../../configs/axios';

const SignInForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(userIsloadingAction(true));
    user
      .login({
        email, password
      })
      .then((res) => {
        setAuthorizationHeaders(res.data.token);
        dispatch(userIsloadingAction(false));
        navigate('/home')

      })
      .catch((err) => {
        const {message} =err.response.data;
        dispatch(globalAllertAction({show: true, message }));
        dispatch(userIsloadingAction(false));
      })
  };

  return (
    <div className='px-6'>
      <Gap height={26} />
      <Input label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Type your email address' />
      <Gap height={16} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} label='Password' type='password' placeholder='Type your password' />
      <Gap height={24} />
      <Button label='sign in' onClick={onSubmit} />
      <Gap height={12} />
      <Button labelColor='white' background='bg-gray-700' label='Google' />
      <Gap height={12} />
      <Button labelColor='white' background='bg-gray-700' label='Create new account' onClick={() => navigate('/sign-up')} />

    </div>
  )
}

export default SignInForm