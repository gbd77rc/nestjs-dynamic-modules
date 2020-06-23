import { Injectable, Inject } from "@nestjs/common";
import { DbService } from "src/Base/db.service";
import { SlowService } from "src/Base/slow.service";

@Injectable()
export class OtherService {
  constructor(private service: DbService,private slowService: SlowService) {
    console.log(`Created OtherService`);
    console.log(`DbService Name is [${service.getName()}]`);
    console.log(`SlowService Name is [${slowService.getName()}]`);
  }
}