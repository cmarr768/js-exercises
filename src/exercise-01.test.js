const user = require('../data/user.json');

const get = (object, field) => {};

describe('exercise-01', () => {
  describe('get', () => {
    it('should return the value of the field passed in', () => {
      expect(get(user, 'firstName')).toBe(user.firstName);
      expect(get(user, 'created')).toBe(user.created);
    });
  });
});
