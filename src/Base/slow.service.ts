import { Injectable } from '@nestjs/common';

@Injectable()
export class SlowService {
  private _name: string;
  constructor() {
    console.log(`Created SlowService`);
    this._name = "Sl1";
  }

  async registerName(name: string): Promise<void> {
    this._name = name;
  }

  getName(): string {
    return this._name + '-SlowService';
  }
}
