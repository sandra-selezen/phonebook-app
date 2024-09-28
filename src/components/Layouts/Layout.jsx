import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import bgImage from '../../assets/images/main-bg.png';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Box as='main' position={'relative'}>
        <Image width={'100%'} height={'100vh'} src={bgImage} objectFit={'cover'} objectPosition={'center'} />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
      <Toaster position="top-center" />
    </Box>
  )
};
