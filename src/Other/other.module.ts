import { Module } from "@nestjs/common";
import { BaseModule } from "src/Base/base.module";
import { OtherService } from "./other.service";
import { SlowService } from "src/Base/slow.service";
import { DbService } from "src/Base/db.service";

@Module({
    imports: [BaseModule.forFeature()],
    providers: [OtherService],
  })
  export class OtherModule {}