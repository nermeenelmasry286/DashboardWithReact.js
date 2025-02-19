import LoginForm from '../components/LoginForm';

export function LoginPage() { // Renamed to avoid conflict
  return (
    <div className='container mt-5 d-flex justify-content-center align-items-center'>
      <LoginForm />
    </div>
  );
}

export default LoginPage; // Make sure this is exported correctly
