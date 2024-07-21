import "reflect-metadata";

import { DataSource } from 'typeorm';

const uri = "mongodb+srv://admin:piMiyCP6bhXlQAdP@users.mxwkr5q.mongodb.net/?retryWrites=true&w=majority&appName=users";

export class MongoDBDataSource {
  static #instance: DataSource;
  private constructor() { }
  public static get instance(): DataSource {
    if (!MongoDBDataSource.#instance) {
      MongoDBDataSource.#instance = new DataSource({
          type: 'mongodb',
          url: uri,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        });
        
    }
    return MongoDBDataSource.#instance;
}
}

