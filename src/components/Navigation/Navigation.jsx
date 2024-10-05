import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
      <Flex as={'nav'} direction={['column', 'column', 'row', 'row']} alignItems={'center'} gap={['12px', '12px', '32px', '32px']}>
        <Box><Link as={NavLink} to="/">Home</Link></Box>
        {isLoggedIn && <Box><Link as={NavLink} to="/contacts">Contacts</Link></Box>}
      </Flex>
    </Box>
  )
}
