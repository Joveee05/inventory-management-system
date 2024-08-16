import User from '../models/user.model';

class UserRepository {
  async findById(id: number) {
    return User.findByPk(id);
  }

  async findByEmail(email: string) {
    return User.findOne({ where: { email } });
  }

  async findAll() {
    return User.findAll();
  }

  async createUser(user: Partial<User>) {
    return User.create(user);
  }

  async update(user: User, dataToUpdate: Partial<User>) {
    return user.update(dataToUpdate);
  }

  async delete(user: User) {
    return user.destroy();
  }
}

export default new UserRepository();
