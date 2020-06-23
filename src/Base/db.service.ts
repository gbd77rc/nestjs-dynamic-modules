import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private _name: string;
  constructor() {
    console.log(`Created DbService`);
    this._name = "Db1";
  }

  async registerName(name: string): Promise<void> {
    this._name = name;
  }

  getName(): string {
    return this._name + '-DbService';
  }
}
