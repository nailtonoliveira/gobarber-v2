import React from 'react';

import { AuthProvider } from './contexts/AuthContext';
import SignIn from './pages/SignIn/index';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
