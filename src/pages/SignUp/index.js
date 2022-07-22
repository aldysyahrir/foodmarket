
import { useNavigate} from 'react-router-dom';
import { AuthHeader, Gap, SignUpForm } from '../../components';

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col w-full'>
      <AuthHeader withArrowLeft tittle='Sign Up' desc='register and eat' onClick={() => navigate('/sign-in')}/>
      <Gap height={24} className='bg-gray-100'/>
      <SignUpForm/>
    </div>
  )
}

export default SignUp