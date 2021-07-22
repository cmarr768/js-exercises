const users = require('../data/users.json');

const find = (objects, field, value) => {};

describe('exercise-06', () => {
  describe('find', () => {
    it('should return users with specified values', () => {
      expect(find(users, 'firstName', 'Ash')).toMatchObject([
        expect.objectContaining({ userId: 1234567 }),
      ]);
    });
  });
});
