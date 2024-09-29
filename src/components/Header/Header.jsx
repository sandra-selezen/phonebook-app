import { Stack } from '@chakra-ui/react';

import { useAuth } from '../../hooks/hooks';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../Navigation/AuthNav';
import { UserNav } from '../Navigation/UserNav';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack
      as={'header'}
      direction={['column', 'column', 'row', 'row']}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'24px 32px'}
      bgGradient='linear-gradient(90deg, #2A6571 0%, #C15553 100%)'
    >
      <Navigation />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Stack>
  )
}
