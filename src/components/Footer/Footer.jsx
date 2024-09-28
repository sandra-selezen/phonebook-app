import { Box, Text, Link } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as='footer'
      padding={'24px 32px'}
      textAlign={'center'}
      bgGradient='linear(90deg, #2A6571 0%, #C15553 100%)'
    >
      <Text>
        Developed with 💙💛 by{" "}
        <Link href='https://github.com/sandra-selezen' isExternal>Sandra Selezen</Link>
      </Text>
    </Box>
  )
}
