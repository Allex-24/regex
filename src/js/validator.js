class Validator {
  static validateUsername(username) {
    const regex = /^(?![-_0-9])(?!.*?[-_]{2,})(?!.*?\d{4,})([a-zA-Z0-9-_]+)(?<![-_0-9])$/;

    return regex.test(username);
  }
}

module.exports = Validator;
