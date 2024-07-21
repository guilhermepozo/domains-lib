import { User } from '../entity/User';
import { Repository } from './Base';

export interface UserRepository extends Repository<User> {
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}