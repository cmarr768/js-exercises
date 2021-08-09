const users = require('../data/users.json');

const removeUser = (objects, userId) => {};

describe('exercise-11', () => {
  describe('removeUser', () => {
    it('should remove a user by id', () => {
      const response = removeUser(users, 7654888);
      expect(response).toMatchObject([
        expect.objectContaining({ firstName: 'Ash' }),
        expect.objectContaining({ firstName: 'Misty' }),
        expect.objectContaining({ firstName: 'Brock' }),
        expect.objectContaining({ firstName: 'Clement' }),
      ]);
    });

    it('not mutate the array', () => {
      const response = removeUser(users, 7654888);
      expect(response).not.toMatchObject(users);
    });
  });
});
