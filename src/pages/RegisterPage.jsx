import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    navigate('/thank-you');
  };

  return <RegistrationForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
