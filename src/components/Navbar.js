import React from 'react';
import { Link } from 'react-router-dom';
import { HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

const Navbar = () => (
  <HStack>
    <HStack spacing="1em">
      <Link to="/">
        <Text px="0.7em" py="1em" fontSize="1.2rem">
          Home
        </Text>
      </Link>
      <Link to="/myteam">
        <Text px="0.7em" py="1em" fontSize="1.2rem">
          Team
        </Text>
      </Link>
    </HStack>
  </HStack>
);

export default Navbar;
