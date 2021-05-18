"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "arrays",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "objects",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "functions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
