import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, HStack, VStack, Box } from '@chakra-ui/layout';
import {
  Button,
  Flex,
  Image,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';

import { setSprites as disSetSprites } from '../redux/actions/pokeData';
import {
  addToTeam as disAddToTeam,
  removeFromTeam as disRemoveFromTeam,
} from '../redux/actions/myTeam';

const PokeDetail = ({
  pokeData: {
    data: { name, forms, types, height, weight, abilities },
    sprites,
  },
  myTeam,
  disSetSprites: setSprites,
  disAddToTeam: addToTeam,
  disRemoveFromTeam: removeFromTeam,
}) => {
  useEffect(() => {
    const fetchSprite = async () => {
      const res = await fetch(forms[0].url);
      const data = await res.json();

      setSprites(data);
    };

    fetchSprite();
  }, [name]);

  const [isLargerThan500] = useMediaQuery('(min-width: 500px');

  const { colorMode } = useColorMode();

  const onClickAddBtn = () => {
    if (myTeam.length < 6) {
      addToTeam(forms[0].url);

      let storage = [];

      if (localStorage.pokeApp) {
        storage = JSON.parse(localStorage.getItem('pokeApp'));
      }

      storage.push(forms[0].url);
      localStorage.setItem('pokeApp', JSON.stringify(storage));
    }
  };

  const onClickDelBtn = () => {
    removeFromTeam(forms[0].url);

    let storage = [];

    if (localStorage.pokeApp) {
      storage = JSON.parse(localStorage.getItem('pokeApp'));
    }

    storage = storage.filter((url) => url !== forms[0].url);
    localStorage.setItem('pokeApp', JSON.stringify(storage));

    if (
      window.location.pathname === '/myteam' ||
      window.location.pathname === '/pokemon-app/myteam'
    ) {
      window.location.reload();
    }
  };

  return (
    <VStack
      py="2em"
      px="4em"
      borderRadius="3em"
      spacing="1.5em"
      backgroundColor={colorMode === 'light' ? 'teal.200' : 'teal.800'}
      w={isLargerThan500 ? '' : '90vw'}
      m="auto"
    >
      <Text fontSize="2em" fontWeight="bold">
        {name}
      </Text>

      <Flex flexDirection={isLargerThan500 ? 'row' : 'column'}>
        {sprites && (
          <Image src={sprites.sprites.front_default} boxSize="15em" />
        )}

        <VStack spacing="2em" align="left">
          <Box>
            <Text fontWeight="bold">Type:</Text>
            <HStack>
              {types.map((type) => (
                <Text key={type.slot}>{type.type.name}</Text>
              ))}
            </HStack>
          </Box>

          <Box>
            <HStack>
              <Text fontWeight="bold">Height:</Text>
              <Text>{height * 100} cm</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Weight:</Text>
              <Text>{weight / 10} kg</Text>
            </HStack>
          </Box>

          <Box>
            <Text fontWeight="bold">Ability:</Text>

            {abilities.map((ability) => (
              <Text key={ability.ability.name}>{ability.ability.name}</Text>
            ))}
          </Box>
        </VStack>
      </Flex>

      {myTeam.includes(forms[0].url) ? (
        <Button
          onClick={onClickDelBtn}
          color="black"
          backgroundColor="yellow.200"
        >
          Remove From Team {`(${myTeam.length})`}
        </Button>
      ) : (
        <Button
          onClick={onClickAddBtn}
          color="black"
          backgroundColor="purple.200"
        >
          Add to Team {`(${myTeam.length})`}
        </Button>
      )}
      {myTeam.length === 6 && (
        <Text
          px="1em"
          py="0.5em"
          fontWeight="bold"
          color="red.400"
          fontSize="1.1em"
        >
          Note: Max of 6 pokemon reached
        </Text>
      )}
    </VStack>
  );
};

PokeDetail.propTypes = {
  pokeData: PropTypes.object.isRequired,
  myTeam: PropTypes.array.isRequired,
  disSetSprites: PropTypes.func.isRequired,
  disAddToTeam: PropTypes.func.isRequired,
  disRemoveFromTeam: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pokeData: state.pokeData,
  myTeam: state.myTeam,
});

export default connect(mapStateToProps, {
  disSetSprites,
  disAddToTeam,
  disRemoveFromTeam,
})(PokeDetail);
