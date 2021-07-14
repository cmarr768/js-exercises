const user = require('../data/user.json');

const has = (object, field) => {};

describe('exercise-03', () => {
  describe('has', () => {
    it('should return if the passed in field is a property of the object', () => {
      expect(has(user, 'firstName')).toBe(true);
      expect(has(user, 'address')).toBe(false);
    });
  });
});
