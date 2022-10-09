const crypto = require("crypto");

function createHashPass(password) {
  const hash = crypto
    .pbkdf2Sync(password, process.env.SECRET_SALT, 1000, 64, `sha512`)
    .toString(`hex`);
  console.log({ hash });
  return hash;
}

module.exports = { createHashPass };

