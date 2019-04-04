import { Router } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../models';

const userRouter = Router();

userRouter.post('/', async (req, res, next) => {

  try {
    const { username, email, password, postCode, address, phone } = req.body;

    const encrypted = await bcrypt.hash(password, process.env.ENCRYPT_COUNT / 1);
    const newUser = await User.create({
       username,
       email,
       password: encrypted,
       type: 'default',
       postCode,
       address,
       phone,
     });

    return res.json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.log('Error from POST/user', error);
    next(error);
  }
});

export default userRouter;
