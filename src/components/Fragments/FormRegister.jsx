import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button';

const FormRegister = () => {
  return (
    <form action="" className="">
      <InputForm label="Full Name" type="Full Name" placeholder="Full Name" name="Full Name" />
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="Email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <InputForm
        label="Confirm Password"
        type="Confirm Password"
        placeholder="******"
        name="Confirm Password"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
}

export default FormRegister;
