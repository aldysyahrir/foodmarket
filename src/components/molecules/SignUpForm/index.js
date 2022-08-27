import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Gap, Input, Button } from '../../atoms';
import { registerDataAction } from '../../../redux';
import { image2base64 } from '../../../utils';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmit = () => {
    dispatch(registerDataAction({ name, email, password }));
    navigate('/sign-up-address');
  };

  const getImage = () => {
    ref.current.click((e) => {
      e.persist()
      image2base64(e.target.file[0]).then(image => {
        console.log('image', image)
      })
    })
  }

  return (
    <div className='px-6'>
      <Gap height={26} />
      <div className='w-full flex justify-center items-center'>
        <div className='w-28 h-28 border border-dashed rounded-full flex justify-center items-center'>
          <div onClick={getImage} className='cursor-pointer w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center'>
            <p className='text-sm font-light text-gray-500'>
              Add <br /> Photo</p>
          </div>
        </div>
      </div>
      <Gap height={16} />
      <input ref={ref} type="file" className='hidden' />
      <Input value={name} onChange={e => setName(e.target.value)} label='Full Name' placeholder='Type your full name' />
      <Gap height={16} />
      <Input value={email} onChange={e => setEmail(e.target.value)} label='Email Address' placeholder='Type your email address' />
      <Gap height={16} />
      <Input value={password} onChange={e => setPassword(e.target.value)} label='Password' type='password' placeholder='Type your password' />
      <Gap height={24} />
      <Button label='Continue' onClick={onSubmit} />

    </div>
  )
}

export default SignUpForm