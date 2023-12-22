import { Request, Response } from 'express';
import { User } from '../models/Users';
import { Sequelize } from 'sequelize';

export const listParticpants = async (req: Request, res: Response) => {
  let users = await User.findAll();

  res.json({ users });
};