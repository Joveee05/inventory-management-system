import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRole } from '../types/customTypes';
const { JWT_SECRET } = process.env;

interface AuthRequest extends Request {
  user?: any;
}

export const authorize = (roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Unauthorized Access' });
      }

      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  };
};
