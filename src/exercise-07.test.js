const users = require('../data/users.json');

const printPokemon = (objects) => {};

describe('exercise-07', () => {
  describe('printPokemon', () => {
    beforeEach(() => {
      jest.spyOn(Array.prototype, 'forEach');
      jest.spyOn(console, 'log');
    });

    it('should print each pokemon', () => {
      printPokemon(users);
      expect(console.log).toHaveBeenCalledTimes(users.length);
      expect(Array.prototype.forEach).toHaveBeenCalled();
    });
  });
});
