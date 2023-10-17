const Mating = require('../models/mating');

const getAllMatings = async (request, response) => {
  try {
    const matings = await Mating.find({ user: request.user._id });
    response.json({ matings });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createMating = async (request, response) => {
  try {
    const matingDoe = request.body.matingDoe;
    const matingBuck = request.body.matingBuck;
    const matingDate2 = request.body.matingDate2;
    const nesting = request.body.nesting;
    const kindling = request.body.kindling;
    const status = request.body.status;

    const mating = await Mating.create({
      matingDoe,
      matingBuck,
      matingDate2,
      nesting,
      kindling,
      status,
      user: request.user._id,
    });
    response.json({ mating });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editMating = async (request, response) => {
  try {
    const matingId = request.params.id;
    const matingDoe = request.body.matingDoe;
    const matingBuck = request.body.matingBuck;
    const matingDate2 = request.body.matingDate2;
    const nesting = request.body.nesting;
    const kindling = request.body.kindling;
    const status = request.body.status;

    await Mating.findOneAndUpdate(
      { _id: matingId, user: request.user._id },
      {
        matingDoe,
        matingBuck,
        matingDate2,
        nesting,
        status,
        kindling,
      }
    );
    // Find updated
    const mating = await Mating.findById(matingId);
    // Return updated
    response.json({ mating });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteMating = async (request, response) => {
  try {
    const matingId = request.params.id;
    await Mating.deleteOne({ _id: matingId, user: request.user._id });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllMatings,
  createMating,
  deleteMating,
  editMating,
};
