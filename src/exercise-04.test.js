const user = require('../data/user.json');

const omit = (object, fields) => {};

describe('exercise-04', () => {
  describe('omit', () => {
    it('should return an object not containing the single field passed in', () => {
      const { firstName, ...ans } = user;
      expect(omit(user, 'firstName')).toStrictEqual(ans);
    });

    it('should return an object not containing the fields passed in', () => {
      const { firstName, lastName, email, ...ans } = user;
      expect(omit(user, ['firstName', 'lastName', 'email'])).toStrictEqual(ans);
    });

    it('should handle fields that do not exist', () => {
      const { email, address, ...ans } = user;
      expect(omit(user, ['email', 'address', 'updated'])).toStrictEqual(ans);
    });
  });
});
