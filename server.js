// if (process.env.NODE_ENV != 'production') {
//   require('dotenv').config();
// }
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
const animalController = require('./controllers/animalController');
const diseaseController = require('./controllers/diseaseController');

const userController = require('./controllers/userController');
const feedController = require('./controllers/feedController');
const matingController = require('./controllers/matingController');
const medController = require('./controllers/medController');
const quarantineController = require('./controllers/quarantineControllers');
const vaccinationController = require('./controllers/vaccinationController');
const profileController = require('./controllers/profileController');
const requireAuth = require('./middleware/requireAuth');

const app = express();
dotenv.config();

//enable express read json so server can read it, set limit for image size
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: [
      '*',
      'http://localhost:3001',
      //'https://recordsfrontend.vercel.app',
    ],
    credentials: true,
  })
);
//DB connection
connectToDb();

//routes
//AUTH
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.get('/logout', userController.logout);
app.get('/check-auth', requireAuth, userController.checkAuth);

//ANIMALS
//get all items
app.get('/animals', requireAuth, animalController.getAllAnimals);
//get a single item
app.get('/animals/:id', requireAuth, animalController.getSingleAnimal);
//create an item
app.post('/animals', requireAuth, animalController.createAnimal);
//edit an item
app.put('/animals/:id', requireAuth, animalController.editAnimal);
//delete
app.delete('/animals/:id', requireAuth, animalController.deleteAnimal);

//Feed
app.get('/feeds', requireAuth, feedController.getAllFeeds);
app.post('/feeds', requireAuth, feedController.createFeed);
app.put('/feeds/:id', requireAuth, feedController.editFeed);
app.delete('/feeds/:id', requireAuth, feedController.deleteFeed);

//profile
app.get('/profiles', requireAuth, profileController.getAllProfiles);
app.post('/profiles', requireAuth, profileController.createProfile);
app.put('/profiles/:id', requireAuth, profileController.editProfile);
app.delete('/profiles/:id', requireAuth, profileController.deleteProfile);

//Disease
app.get('/diseases', requireAuth, diseaseController.getAllDiseases);
app.post('/diseases', requireAuth, diseaseController.createDisease);
app.put('/diseases/:id', requireAuth, diseaseController.editDisease);
app.delete('/diseases/:id', requireAuth, diseaseController.deleteDisease);

//mating
app.get('/matings', requireAuth, matingController.getAllMatings);
app.post('/matings', requireAuth, matingController.createMating);
app.put('/matings/:id', requireAuth, matingController.editMating);
app.delete('/matings/:id', requireAuth, matingController.deleteMating);

//meds
app.get('/meds', requireAuth, medController.getAllMeds);
app.post('/meds', requireAuth, medController.createMed);
app.put('/meds/:id', requireAuth, medController.editMed);
app.delete('/meds/:id', requireAuth, medController.deleteMed);

//quarantine
app.get('/quarantines', requireAuth, quarantineController.getAllQuarantines);
app.post('/quarantines', requireAuth, quarantineController.createQuarantine);
app.put('/quarantines/:id', requireAuth, quarantineController.editQuarantine);
app.delete(
  '/quarantines/:id',
  requireAuth,
  quarantineController.deleteQuarantine
);

//vaccination
app.get('/vaccinations', requireAuth, vaccinationController.getAllVaccinations);
app.post('/vaccinations', requireAuth, vaccinationController.createVaccination);
app.put(
  '/vaccinations/:id',
  requireAuth,
  vaccinationController.editVaccination
);
app.delete(
  '/vaccinations/:id',
  requireAuth,
  vaccinationController.deleteVaccination
);

app.listen(process.env.PORT, function () {
  console.log('server is listening on ' + process.env.PORT);
});
