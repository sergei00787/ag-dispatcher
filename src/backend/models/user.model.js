const bcrypt = require("bcryptjs");

function getHash(pwd) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pwd, salt);
}

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      set(value) {
        getHash(value)
      }
    },
    email: {
      type: Sequelize.STRING
    },
    domainAuth: {
      type: Sequelize.BOOLEAN
    },
    domainName: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });

  return User;
};