import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Gap, Input, Button, Avatar } from '../../atoms';
import { registerDataAction } from '../../../redux';
import { image2base64 } from '../../../utils';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = () => {
    dispatch(registerDataAction({ name, email, password, avatar }));
    navigate('/sign-up-address');
  };

  const onAvatarChange = (e) => {
    e.persist();
    image2base64(e.target.files[0]).then((img) => {
      setAvatar(img);
      const src = URL.createObjectURL(e.target.files[0]);
      setImage(src);
    });
  };

  return (
    <div className='px-6'>
      <Gap height={26} />
      <Avatar image={image} value={avatar} onChange={onAvatarChange} />
      <Gap height={16} />
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