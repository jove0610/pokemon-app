import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/layout';
import { Button, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';

import {
  clearData as disClearData,
  setData as disSetData,
} from '../redux/actions/pokeData';

import PokeDetail from './PokeDetail';

import headerImage from '../media/header.png';

const Home = ({ disClearData: clearData, disSetData: setData }) => {
  const [state, setState] = useState({
    pokeInput: '',
    displayFetchError: false,
    displayPokeDetail: false,
  });
  const { pokeInput, displayFetchError, displayPokeDetail } = state;

  useEffect(() => () => clearData(), []);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeInput.toLowerCase()}`
    );

    if (res.status === 404) {
      setState({
        ...state,
        displayFetchError: true,
        displayPokeDetail: false,
      });
      clearData();
    }
    if (res.status === 200) {
      const data = await res.json();
      setData(data);
      setState({
        ...state,
        pokeInput: '',
        displayFetchError: false,
        displayPokeDetail: true,
      });
    }
  };

  const onClickSurprise = async () => {
    // random num from 1 to 898
    const num = Math.floor(Math.random() * 898) + 1;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);

    if (res.status === 404) {
      setState({
        ...state,
        displayFetchError: true,
        displayPokeDetail: false,
      });
      clearData();
    }
    if (res.status === 200) {
      const data = await res.json();
      setData(data);
      setState({
        ...state,
        pokeInput: '',
        displayFetchError: false,
        displayPokeDetail: true,
      });
    }
  };

  return (
    <VStack spacing="50">
      <Box pt="10">
        <Image
          src={headerImage}
          alt="logo"
          width="20em"
          height="7em"
          mb="3em"
        />
        <form onSubmit={onSubmit}>
          <VStack spacing="5">
            <Input
              size="lg"
              variant="filled"
              focusBorderColor="pink.400"
              placeholder="Search for pokemon"
              name="pokeInput"
              value={state.pokeInput}
              onChange={onChange}
              isRequired
            />
            <HStack spacing="1.5em">
              <Button colorScheme="teal" type="submit">
                Search
              </Button>
              <Button
                colorScheme="teal"
                type="button"
                onClick={onClickSurprise}
              >
                Surprise Me!
              </Button>
            </HStack>
          </VStack>
        </form>
        {displayFetchError && (
          <Text
            fontSize="lg"
            mt="5"
            py="1"
            align="center"
            backgroundColor="red.300"
          >
            Pokemon Not Found
          </Text>
        )}
      </Box>

      {displayPokeDetail && (
        <Box>
          <PokeDetail />
        </Box>
      )}
    </VStack>
  );
};

Home.propTypes = {
  disClearData: PropTypes.func.isRequired,
  disSetData: PropTypes.func.isRequired,
};

export default connect(null, { disClearData, disSetData })(Home);
