import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Text, VStack } from '@chakra-ui/layout';
import { Button, HStack, Image } from '@chakra-ui/react';

import {
  setData as disSetData,
  clearData as disClearData,
} from '../redux/actions/pokeData';

import PokeDetail from './PokeDetail';

const Team = ({ myTeam, disSetData: setData, disClearData: clearData }) => {
  const [state, setState] = useState({
    teamData: [],
    displayPokeDetail: false,
  });

  const { teamData, displayPokeDetail } = state;

  useEffect(() => {
    const fetchSprites = async () => {
      myTeam.forEach(async (url, index) => {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            teamData[index] = {
              name: data.name,
              url: data.sprites.front_default,
              id: data.id,
            };

            setState({
              ...state,
            });
          });
      });
    };
    fetchSprites();

    return () => {
      clearData();
    };
  }, []);

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

  return (
    <VStack>
      {teamData.length !== 0 ? (
        <VStack>
          {teamData.map((pokemon) => (
            <HStack key={pokemon.id}>
              <Image src={pokemon.url} />
              <Text>{pokemon.name}</Text>
              <Button name={pokemon.name} onClick={onClickViewBtn}>
                View Details
              </Button>
            </HStack>
          ))}
        </VStack>
      ) : (
        <Box>
          <Text>You do not any member on your team</Text>
        </Box>
      )}
      {displayPokeDetail && (
        <Box>
          <PokeDetail />
        </Box>
      )}
    </VStack>
  );
};

Team.propTypes = {
  myTeam: PropTypes.array.isRequired,
  disSetData: PropTypes.func.isRequired,
  disClearData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myTeam: state.myTeam,
});

export default connect(mapStateToProps, { disSetData, disClearData })(Team);
