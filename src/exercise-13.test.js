const user = require('../data/user.json');

const flatten = (object) => {};

describe('exercise-02', () => {
  describe('flatten', () => {
    it('should flatten the object of an array of key: value', () => {
      expect(flatten(user)).toStrictEqual([
        { userId: user.userId },
        { firstName: user.firstName },
        { lastName : user.lastName },
        { email: user.email },
        { created: user.created },
        { address_line1: user.address.line1 },
        { address_city: user.address.city },
        { address_state: user.address.state },
        { address_zip: user.address.zip },
        { linkedAccount_instagram_userName: user.linkedAccount.instagram.userName },
      ]);
    });
  });
});
