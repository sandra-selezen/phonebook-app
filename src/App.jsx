import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Spinner } from '@chakra-ui/react';

import { Layout } from './components/Layouts/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const ContactsPage = lazy(() => import('./pages/Contacts'));
const SignUpPage = lazy(() => import('./pages/SignUp'));
const LoginPage = lazy(() => import('./pages/Login'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App;
