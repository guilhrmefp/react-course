import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, repeatPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === repeatPassword) {
      const userAuth = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = userAuth;
      user.displayName = displayName;
      console.log(userAuth)
      createUserDocumentFromAuth(user);
    } else {
      console.log('passwords do not match');
    }
  };

  return (
    <div>
      <h1>Sign up with your e-mail and password.</h1>
      <form onSubmit={handleSubmit}>
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
