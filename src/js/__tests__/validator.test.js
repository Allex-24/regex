const Validator = require('../validator'); 

describe('Validator', () => {
  test('valid usernames should pass', () => {
    expect(Validator.validateUsername('allex_kov')).toBe(true);
    expect(Validator.validateUsername('user123')).toBe(true);
    expect(Validator.validateUsername('a-b-c')).toBe(true);
  });

  test('usernames with consecutive digits should fail', () => {
    expect(Validator.validateUsername('user1234')).toBe(false);
    expect(Validator.validateUsername('abc1234xyz')).toBe(false);
  });

  test('usernames starting with digits, underscores, or dashes should fail', () => {
    expect(Validator.validateUsername('123user')).toBe(false);
    expect(Validator.validateUsername('_username')).toBe(false);
    expect(Validator.validateUsername('-user')).toBe(false);
  });

  test('usernames ending with digits, underscores, or dashes should fail', () => {
    expect(Validator.validateUsername('user123')).toBe(false);
    expect(Validator.validateUsername('username_')).toBe(false);
    expect(Validator.validateUsername('user-')).toBe(false);
  });

  test('usernames with multiple consecutive underscores or dashes should fail', () => {
    expect(Validator.validateUsername('user__name')).toBe(false);
    expect(Validator.validateUsername('user--name')).toBe(false);
  });
});
