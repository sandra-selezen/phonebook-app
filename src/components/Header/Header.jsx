import { Stack } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
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
    </Stack>
  )
}