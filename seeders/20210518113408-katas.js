"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "katas",
      [
        {
          name: "Largest pair sum in array",
          cwId: "556196a6091a7e7f58000018",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "shorter concat [reverse longer]",
          cwId: "54557d61126a00423b000a45",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Small enough? - Beginner",
          cwId: "57cc981a58da9e302a000214",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("katas", null, {});
  },
};
