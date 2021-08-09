const users = require('../data/users.json');

const advancedFind = (objects, field, value) => {};

describe('exercise-12', () => {
  describe('advancedFind', () => {
    it('should return users with specified values', () => {
      expect(advancedFind(users, 'firstName', 'Ash')).toMatchObject([
        expect.objectContaining({ firstName: 'Ash' }),
      ]);
    });

    it('should return users based on nested value', () => {
      expect(advancedFind(users, 'regions', 'kanto')).toMatchObject([
        expect.objectContaining({ firstName: 'Ash' }),
        expect.objectContaining({ firstName: 'Misty' }),
        expect.objectContaining({ firstName: 'Brock' }),
      ]);
    });

    it('should return users based on any value no matter how deep', () => {
      expect(advancedFind(users, 'pokemon.types', 'fire')).toMatchObject([
        expect.objectContaining({ firstName: 'Ash' }),
        expect.objectContaining({ firstName: 'Serena' }),
      ]);
    });
  });
});
