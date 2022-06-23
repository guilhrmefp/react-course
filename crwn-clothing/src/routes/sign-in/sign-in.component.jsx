import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form.component/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page.</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>

      <SignUpForm />
    </div>
  );
}

export default SignIn;
