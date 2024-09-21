import { Db } from 'mongodb';
import { Database } from './database';

export class UserService {
  private db: Db;

  constructor(private database: Database) {
    this.db = this.database.getDb();
  }

  async createUser(username: string, email: string) {
    const result = await this.db.collection('users').insertOne({ username, email });
    return result.insertedId;
  }

  async findUserByEmail(email: string) {
    return await this.db.collection('users').findOne({ email });
  }
}
