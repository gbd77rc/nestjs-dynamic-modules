import { Module, DynamicModule, Provider } from "@nestjs/common";
import { SlowService } from "./slow.service";
import { DbService } from "./db.service";
import { BaseOptions } from "./base.options";
import { BaseCoreModule } from "./base-core.module";

@Module({
    // imports: [],
    // providers: [SlowService, DbService],
    // exports: [SlowService, DbService]
  })
  export class BaseModule {
      private static _options: BaseOptions;
      constructor(){
          console.log(`Constructor Options [${BaseModule._options.name}]`);
      }
    static forRoot(options: BaseOptions): DynamicModule {
        this._options= options;
        console.log(`forRoot Options [${BaseModule._options?.name}]`)
        const info = {
            module: BaseModule,
            imports: [BaseCoreModule.forRoot(options)]
        }
        return info;
    }

    static forFeature(): DynamicModule{
        console.log(`ForFeature Options [${BaseModule._options?.name}]`)
        const providers = this.useProviders();
        const info ={
            module:BaseModule,
            // providers: providers,
            // exports: providers
            providers: [SlowService, DbService],
            exports: [DbService, SlowService]
        }
        return info;
    }

    private static useProviders(): Provider[]{
        console.log("Calling UseProviders")
        return [{
            provide: SlowService,
            useExisting: SlowService
        }, {
            provide: DbService,
            useExisting: DbService
        }]
    }
  }