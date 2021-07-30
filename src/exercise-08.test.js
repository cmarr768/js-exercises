const users = require('../data/users.json');

const getSeries = (regions) => {
  return regions.map((region) => {
    switch (region) {
      case 'kanto':
        return 'indigo';
      case 'kalos':
        return 'xy';
      default:
        return;
    }
  });
};

const transformPokemon = (objects) => {};

describe('exercise-08', () => {
  describe('transformPokemon', () => {
    beforeEach(() => {
      jest.spyOn(Array.prototype, 'map');
    });

    it('should return each user with a series array', () => {
      const response = transformPokemon(users);
      expect(Array.prototype.map).toHaveBeenCalledTimes(6);
      expect(response[0].series).toStrictEqual(['indigo', 'xy']);
      expect(response[4].series).toStrictEqual(['xy']);
    });
  });
});
