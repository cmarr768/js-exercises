const users = require('../data/users.json');

const totalPokemonByRegion = (objects, region) => {};

describe('exercise-09', () => {
  describe('totalPokemonByRegion', () => {
    beforeEach(() => {
      jest.spyOn(Array.prototype, 'reduce');
    });

    it('should return the total pokemon for a region', () => {
      expect(totalPokemonByRegion(users, 'kanto')).toBe(7);
      expect(totalPokemonByRegion(users, 'kalos')).toBe(10);
      expect(Array.prototype.reduce).toHaveBeenCalled();
    });
  });
});
