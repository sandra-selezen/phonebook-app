import { Flex, Box, Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Flex direction={['column', 'column', 'row', 'row']} alignItems={'center'} gap={['12px', '12px', '32px', '32px']}>
        <Box><Link as={NavLink} to="/signup">Sign Up</Link></Box>
        <Box><Link as={NavLink} to="/login">Log In</Link></Box>
      </Flex>
    </Box>
  )
}
