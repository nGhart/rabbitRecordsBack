const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(request, response, next) {
  //read token
  //const token = request.cookies.Authorization;
  //console.log('req token', token);
  try {
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGZjZTMxZmUzNjhkNDEzNDUyY2MzZDQiLCJleHAiOjE3MDAxNDIzMzQ4NDYsImlhdCI6MTY5NzU1MDMzNH0.5oDk738k-Ln4t2xvLDi5Ij-7ydqOdrA1YiYZx4jg7II'
  
    //decode token
    const decoded = jwt.verify(token, process.env.SECRET);
    //make sure token is not expired
    if (Date.now() > decoded.exp) return response.sendStatus(401);
    //find user
    const user = await User.findById(decoded.sub);
    //if user not found
    if (!user) return response.sendStatus(401);
    //if user found
    request.user = user;

    next();
  } catch (error) {
    console.log(error.message);
    next();
    //return response.sendStatus(401);
    //response.sendStatus(401);
  }
}
module.exports = requireAuth;
