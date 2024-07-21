import 'reflect-metadata';
import { MongoDBDataSource } from './database';

export async function initializeDataSources(): Promise<void> {
  const AppDataSource = MongoDBDataSource.instance;
  await AppDataSource.initialize();
  console.log('Data Source has been initialized!');
}

export { MongoDBDataSource };