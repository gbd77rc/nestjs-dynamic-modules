import { Module } from "@nestjs/common";
import { BaseModule } from "./Base/base.module";
import { OtherModule } from "./Other/other.module";

@Module({
  imports: [
    BaseModule.forRoot({
      name: "Testing"
    }),
    OtherModule
  ],
})
export class AppModule {}