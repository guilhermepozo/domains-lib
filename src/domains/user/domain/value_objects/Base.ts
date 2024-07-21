export abstract class ValueObject<T> {
    private readonly _value: T;
  
    constructor(value: T) {
      this._value = value;
    }
  
    get value(): T {
      return this._value;
    }
  
    equals(other: ValueObject<T>): boolean {
      if (other === null || other === undefined) {
        return false;
      }
      return this._value === other.value;
    }
  
    toString(): string {
      return `${JSON.stringify(this._value)}`;
    }
  }