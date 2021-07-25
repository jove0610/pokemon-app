import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  Link,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import logo from '../media/logo.png';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan500] = useMediaQuery('(min-width: 500px');
  const isDark = colorMode === 'dark';

  return (
    <Flex w="100%" px="3em" alignItems="center">
      <Image src={logo} alt="logo" boxSize="2em" mr="0.7em" />
      <Heading
        my="2"
        fontSize="1.8em"
        color="cyan.500"
        display={isLargerThan500 ? 'block' : 'none'}
      >
        Poké App
      </Heading>
      <Spacer />
      <Link
        as={ReachLink}
        to="/"
        px="0.7em"
        py="1em"
        fontWeight="semibold"
        fontSize="1.2rem"
        color="cyan.500"
      >
        Home
      </Link>
      <Link
        as={ReachLink}
        to="/myteam"
        px="0.7em"
        py="1em"
        fontWeight="semibold"
        fontSize="1.2rem"
        color="cyan.500"
      >
        Team
      </Link>

      <IconButton
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        ml="2em"
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
