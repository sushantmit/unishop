import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// protection middleware to allow route access to only logged in users
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = (await User.findById(decoded.id).select('-password'));
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized. Token failed.')
    }
  }
  if(!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

//protection middleware to allow route access to only admin users
const adminProtect = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, adminProtect };