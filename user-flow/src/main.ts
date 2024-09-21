import { Database } from './database';
import { UserService } from './UserService';

async function main() {
  const dbInstance = new Database('your-mongodb-uri');

  try {
    await dbInstance.connect();
    const userService = new UserService(dbInstance);

    const userId = await userService.createUser('john_doe', 'john@example.com');
    console.log('Created user with ID:', userId);

    const user = await userService.findUserByEmail('john@example.com');
    console.log('Found user:', user);

  } finally {
    await dbInstance.disconnect();
  }
}

main().catch(console.error);
