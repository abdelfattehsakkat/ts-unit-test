import { MongoClient, Db } from 'mongodb';

export class Database {
  private client: MongoClient;
  private db?: Db;

  constructor(private uri: string) {
    this.client = new MongoClient(uri);
  }

  async connect(): Promise<void> {
    await this.client.connect();
    this.db = this.client.db();
    console.log('Connected to database');
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect first.');
    }
    return this.db;
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      console.log('Disconnected from database');
    }
  }
}
