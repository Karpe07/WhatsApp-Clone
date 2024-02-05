// import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Components
import Messengers from './components/Messengers';
import AccountProvider from './components/context/AccountProvider';


function App() {
  const clientId = '229491494917-sor829ase7mesrars70j2d32ai9tbrjm.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messengers />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
