import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as ReachLink } from 'react-router-dom';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Image,
  Link,
  Spacer,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';

import {
  setData as disSetData,
  clearData as disClearData,
} from '../redux/actions/pokeData';

import { clearTeam as disClearTeam } from '../redux/actions/myTeam';

import PokeDetail from './PokeDetail';

const Team = ({
  myTeam,
  disSetData: setData,
  disClearData: clearData,
  disClearTeam: clearTeam,
}) => {
  const [state, setState] = useState({
    displayPokeDetail: false,
  });
  const { colorMode } = useColorMode();
  const [isLargerThan500] = useMediaQuery('(min-width: 500px');

  const { displayPokeDetail } = state;

  useEffect(() => {
    setState({ ...state, displayPokeDetail: false });

    return () => {
      clearData();
    };
  }, [myTeam]);

  const onClickViewBtn = async (e) => {
    const pokeName = e.target.name;
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
    ).then((res) => res.json());

    setData(data);
    setState({
      ...state,
      displayPokeDetail: true,
    });
  };

  const onClickClearBtn = () => {
    localStorage.removeItem('pokeApp');
    clearTeam();
  };

  return (
    <VStack mt="3em">
      <Accordion allowToggle="true">
        {myTeam.length !== 0 ? (
          <VStack spacing="1.5em" mb="3em">
            {myTeam.map((pokemon) => (
              <AccordionItem key={pokemon.data.name} border="none">
                <Flex
                  align="center"
                  backgroundColor={
                    colorMode === 'light' ? 'teal.200' : 'teal.800'
                  }
                  borderRadius="2.5em"
                  px="2em"
                  w={isLargerThan500 ? '30em' : '90vw'}
                >
                  <Image src={pokemon.sprite} />
                  <Text
                    fontWeight="bold"
                    display={isLargerThan500 ? 'block' : 'none'}
                  >
                    {pokemon.data.name}
                  </Text>
                  <Spacer />

                  <AccordionButton
                    w="8em"
                    backgroundColor="yellow.200"
                    borderRadius="1em"
                    color="black"
                    name={pokemon.data.name}
                    fontWeight="bold"
                    onClick={onClickViewBtn}
                  >
                    View Details
                  </AccordionButton>
                </Flex>
                <AccordionPanel>
                  {displayPokeDetail && (
                    <Box>
                      <PokeDetail />
                    </Box>
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </VStack>
        ) : (
          <Box my="2em">
            <Text fontWeight="bold" fontSize="2em" color="cyan.500">
              Your team is empty...
            </Text>
            <HStack py="1em" justify="center">
              <Link
                as={ReachLink}
                to="/"
                fontWeight="bold"
                color="cyan.500"
                textDecoration="underline"
              >
                Click Here
              </Link>
              <Text px="0" my="0.5em" color="cyan.500">
                to search for pokemon
              </Text>
            </HStack>
          </Box>
        )}
      </Accordion>

      <Button colorScheme="red" onClick={onClickClearBtn}>
        Clear My Team
      </Button>
    </VStack>
  );
};

Team.propTypes = {
  myTeam: PropTypes.array.isRequired,
  disSetData: PropTypes.func.isRequired,
  disClearData: PropTypes.func.isRequired,
  disClearTeam: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myTeam: state.myTeam,
});

export default connect(mapStateToProps, {
  disSetData,
  disClearData,
  disClearTeam,
})(Team);
