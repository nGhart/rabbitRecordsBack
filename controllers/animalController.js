const Animal = require('../models/animal');

//get animals by user ID
const getAllAnimals = async (request, response) => {
  try {
    const animals = await Animal.find({ user: request.user._id });
    response.json({ animals });
    //if the const and the object property's value match you don't need to repeat it
    //   const animals = await Animal.find();
    //   response.json({ animals: animals });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const getSingleAnimal = async (request, response) => {
  try {
    const animalId = request.params.id;
    const animal = await Animal.findOne({
      _id: animalId,
      user: request.user._id,
    });
    response.json({ animal });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createAnimal = async (request, response) => {
  try {
    const name = request.body.name;
    const sex = request.body.sex;
    const dob = request.body.dob;
    const bred = request.body.bred;
    const breed = request.body.breed;
    const dame = request.body.dame;
    const sire = request.body.sire;
    const status = request.body.status;
    const grandDame = request.body.grandDame;
    const grandSire = request.body.grandSire;
    const weightCurrent = request.body.weightCurrent;
    const weightSale = request.body.weightSale;
    const totalService = request.body.totalService;
    const totalLitters = request.body.totalLitters;
    const totalKits = request.body.totalKits;
    const aliveKits = request.body.aliveKits;
    const deadKits = request.body.deadKits;
    const soldKits = request.body.soldKits;
    const butcheredKits = request.body.butcheredKits;

    const animal = await Animal.create({
      name,
      sex,
      dob,
      bred,
      breed,
      status,
      dame,
      sire,
      grandDame,
      grandSire,
      weightCurrent,
      weightSale,
      totalService,
      totalLitters,
      totalKits,
      aliveKits,
      deadKits,
      soldKits,
      butcheredKits,
      user: request.user._id,
    });
    response.json({ animal });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editAnimal = async (request, response) => {
  try {
    //get ID
    const animalId = request.params.id;
    //get data
    const name = request.body.name;
    const sex = request.body.sex;
    const dob = request.body.dob;
    const bred = request.body.bred;
    const breed = request.body.breed;
    const status = request.body.status;
    const dame = request.body.dame;
    const sire = request.body.sire;
    const grandDame = request.body.grandDame;
    const grandSire = request.body.grandSire;
    const weightCurrent = request.body.weightCurrent;
    const weightSale = request.body.weightSale;
    const totalService = request.body.totalService;
    const totalLitters = request.body.totalLitters;
    const totalKits = request.body.totalKits;
    const aliveKits = request.body.aliveKits;
    const deadKits = request.body.deadKits;
    const soldKits = request.body.soldKits;
    const butcheredKits = request.body.butcheredKits;
    //update
    await Animal.findOneAndUpdate(
      { _id: animalId, user: request.user._id },
      {
        name,
        sex,
        dob,
        bred,
        breed,
        status,
        dame,
        sire,
        grandDame,
        grandSire,
        weightCurrent,
        weightSale,
        totalService,
        totalLitters,
        totalKits,
        aliveKits,
        deadKits,
        soldKits,
        butcheredKits,
      }
    );
    //find updated
    const animal = await Animal.findById(animalId);
    //return updated
    response.json({ animal });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteAnimal = async (request, response) => {
  try {
    const animalId = request.params.id;
    await Animal.deleteOne({ _id: animalId, user: request.user._id });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllAnimals,
  getSingleAnimal,
  createAnimal,
  editAnimal,
  deleteAnimal,
};
