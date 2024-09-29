import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { useAuth } from './hooks/hooks';
import { refreshUser } from './redux/auth/operations';

import { Layout } from './components/Layouts/Layout';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import { RestrictedRoute } from './components/Routes/RestrictedRoute';

const HomePage = lazy(() => import('./pages/Home'));
const ContactsPage = lazy(() => import('./pages/Contacts'));
const SignUpPage = lazy(() => import('./pages/SignUp'));
const LoginPage = lazy(() => import('./pages/Login'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' /> :
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<PrivateRoute component={ContactsPage} redirectTo='/login' />} />
        <Route path="signup" element={<RestrictedRoute component={SignUpPage} redirectTo='/contacts' />} />
        <Route path="login" element={<RestrictedRoute component={LoginPage} redirectTo='/contacts' />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
}

export default App;
