const users = require('../data/users.json');

const sortUsers = (objects, field) => {};

describe('exercise-10', () => {
  describe('sortUsers', () => {
    it('should sort the users by first name', () => {
      const response = sortUsers(users, 'firstName');
      expect(response).toMatchObject([
        expect.objectContaining({ firstName: 'Ash' }),
        expect.objectContaining({ firstName: 'Brock' }),
        expect.objectContaining({ firstName: 'Clement' }),
        expect.objectContaining({ firstName: 'Misty' }),
        expect.objectContaining({ firstName: 'Serena' }),
      ]);
    });

    it('not mutate the array', () => {
      const response = sortUsers(users, 'firstName');
      expect(response).not.toMatchObject(users);
    });
  });
});
