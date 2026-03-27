import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashed });
        res.status(201).json({ message: 'User created', userId: user._id  });
    } catch (err) {
        res.status(400).json({ error: 'User already exists or invalid data' });
    }
};

