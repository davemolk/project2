const db = require("./models");

const addSubject = () => {
  db.subject
    .create({
      name: "fundmentals",
    })
    .then((subject) => {
      console.log(subject);
    });
};

// addSubject();

const addKata = () => {
  db.kata
    .create({
      name: "Evens times last",
      cwId: "5a1a9e5032b8b98477000004",
      userId: 1,
    })
    .then((kata) => {
      console.log(kata);
    });
};

async function createUser() {
  const newUser = await db.user.create({
    name: "Dave",
    email: "dave@gmail.com",
    password: "test12345",
    codewars_username: "davemolk",
  });
  console.log(newUser);
}
// createUser();

async function relationAtKata() {
  const foundUser = await db.user.findByPk(1);
  console.log(foundUser);
  const newKata = await foundUser.addKata({
    name: "Evens times last",
    cwId: "5a1a9e5032b8b98477000004",
    userId: 1,
  });
  console.log(newKata);
}

relationAtKata();
// addKata();
