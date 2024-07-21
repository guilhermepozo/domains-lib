export interface Repository<T> {
    save(entity: T): Promise<void>;
    findById(id: string): Promise<T | null>;
  }