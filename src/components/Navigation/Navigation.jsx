import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Box>
      <Flex as={'nav'} direction={['column', 'column', 'row', 'row']} alignItems={'center'} gap={['12px', '12px', '32px', '32px']}>
        <Box><Link as={NavLink} to="/">Home</Link></Box>
        <Box><Link as={NavLink} to="/contacts">Contacts</Link></Box>
      </Flex>
    </Box>
  )
}
