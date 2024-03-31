import FormRegister from '../components/Fragments/FormRegister';
import AuthLayout from '../components/Layouts/AuthLayout';

function RegisterPage() {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
}

export default RegisterPage;
