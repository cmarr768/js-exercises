const user = require('../data/user.json');

const pick = (object, fields) => {};

describe('exercise-05', () => {
  describe('pick', () => {
    it('should return an object only containing the single field passed in', () => {
      expect(pick(user, 'firstName')).toStrictEqual({
        firstName: user.firstName,
      });
    });

    it('should return an object containing the fields passed in', () => {
      expect(pick(user, ['firstName', 'lastName', 'email'])).toStrictEqual({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    });

    it('should handle fields that do not exist', () => {
      expect(pick(user, ['email', 'altAddress', 'updated'])).toStrictEqual({
        email: user.email,
      });
    });
  });
});
