import UserRepository from '../repositories/user.repository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { UserRole } from '../types/customTypes';
const { JWT_SECRET } = process.env;

class UserService {
  async registerUser(
    username: string,
    email: string,
    password: string,
    role: UserRole
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.createUser({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return { token, user };
  }

  async login(email: string, password: string) {
    const user = await UserRepository.findByEmail(email);

    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return { token };
  }

  async getAllUsers() {
    return UserRepository.findAll();
  }

  async getUserById(id: number) {
    return UserRepository.findById(id);
  }

  async updateUser(id: number, data: Partial<User>) {
    const user = await UserRepository.findById(id);
    if (!user) throw new Error('User not found');

    return UserRepository.update(user, data);
  }

  async deleteUser(id: number) {
    const user = await UserRepository.findById(id);
    if (!user) throw new Error('User not found');

    return UserRepository.delete(user);
  }
}

export default new UserService();
