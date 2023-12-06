import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Login from "../../components/Login";


function SignUp() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/posts/form' });

  };

  // Jeśli użytkownik jest zalogowany, wyświetl informacje o sesji lub coś innego
  if (session) {
    return <div>Welcome {session.user.email}</div>;
  }

  // Jeśli użytkownik nie jest zalogowany, wyświetl formularz SignUp
  return (
    <div>
      <button onClick={handleSignIn}>Zaloguj się przez Google</button>
      {/* Tu możesz dodać formularz rejestracji, jeśli jest potrzebny */}
      <Login/>
    </div>
  );
}

export default SignUp;

