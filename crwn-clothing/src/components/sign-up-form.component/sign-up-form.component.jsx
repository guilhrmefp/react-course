import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, repeatPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your e-mail and password.</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>E-mail</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label>Repeat password</label>
        <input
          required
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
