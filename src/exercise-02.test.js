const user = require('../data/user.json');

const transform = (object) => {};

describe('exercise-02', () => {
  describe('transform', () => {
    it('should return an array of the key/value pairs', () => {
      expect(transform(user)).toStrictEqual([
        { key: 'userId', value: user.userId },
        { key: 'firstName', value: user.firstName },
        { key: 'lastName', value: user.lastName },
        { key: 'email', value: user.email },
        { key: 'created', value: user.created },
      ]);
    });
  });
});
