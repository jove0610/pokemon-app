import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, HStack, VStack, Box } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';

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
  };

  return (
    <VStack>
      <Text fontSize="2em" fontWeight="semibold">
        {name}
      </Text>

      <HStack>
        {sprites && (
          <Image src={sprites.sprites.front_default} boxSize="10em" />
        )}

        <Box>
          <Text>Type:</Text>
          <HStack>
            {types.map((type) => (
              <Text key={type.slot}>{type.type.name}</Text>
            ))}
          </HStack>

          <Text>Height: {height * 100} cm</Text>
          <Text>Weight: {weight / 10} kg</Text>

          <Text>Ability:</Text>

          {abilities.map((ability) => (
            <Text key={ability.ability.name}>{ability.ability.name}</Text>
          ))}
        </Box>
      </HStack>

      {myTeam.includes(forms[0].url) ? (
        <Button onClick={onClickDelBtn}>
          Remove From Team {`(${myTeam.length})`}
        </Button>
      ) : (
        <Button onClick={onClickAddBtn}>
          Add to Team {`(${myTeam.length})`}
        </Button>
      )}
      {myTeam.length === 6 && <Text>Max of 6 pokemon reached!</Text>}
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
