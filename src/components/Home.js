import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/layout';
import { Button, Input, Text, VStack } from '@chakra-ui/react';

import {
  clearData as disClearData,
  setData as disSetData,
} from '../redux/actions/pokeData';

import PokeDetail from './PokeDetail';

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
        displayFetchError: false,
        displayPokeDetail: true,
      });
    }
  };

  return (
    <VStack spacing="50">
      <Box pt="10">
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
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
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

      <Button onClick={() => localStorage.removeItem('pokeApp')}>
        Clear Storage
      </Button>
    </VStack>
  );
};

Home.propTypes = {
  disClearData: PropTypes.func.isRequired,
  disSetData: PropTypes.func.isRequired,
};

export default connect(null, { disClearData, disSetData })(Home);
