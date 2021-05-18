const db = require("./models");

const addSubject = () => {
    db.subject
      .create({
        name: "daily",
      })
      .then((subject) => {
        console.log(subject);
      });


// addCategory()


// edit still
async function addSubjectToKata() {
    const music = await db.kata.findOne({
      where: { id: 1 },
    });
    const whiskey = await db.kata.findOne({
      where: { id: 2 },
    });
    const pizza = await db.kata.findOne({
      where: { id: 3 },
    });
    const wedding = await db.kata.findOne({
      where: { id: 4 },
    });
    const node = await db.subject.findOne({
      where: { id: 1 },
    });
    const food = await db.subject.findOne({
      where: { id: 2 },
    });
    const daily = await db.subject.findOne({
      where: { id: 3 },
    });
    music.addSubject(daily);
    whiskey.addSubject(daily);
    whiskey.addSubject(food);
    pizza.addSubject(food);
  }
  
  addCategoryToProject();