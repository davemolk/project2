"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "katas",
      [
        {
          name: "Sum of Cubes",
        },
        {
          name: "Remove the time",
        },
        {
          name: "Multiply",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("katas", null, {});
  },
};
