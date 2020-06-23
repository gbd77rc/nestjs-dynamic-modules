import { Module, Inject, DynamicModule, Scope } from "@nestjs/common";
import { BaseOptions } from "./base.options";
import { DbService } from "./db.service";
import { SlowService } from "./slow.service";
import { ModuleRef } from "@nestjs/core";

@Module({})
export class BaseCoreModule {
    constructor(@Inject("BASEOPTIONS") private readonly options: BaseOptions, private readonly moduleRef: ModuleRef){
        console.log("Core Constructor");
    }

    static forRoot(options: BaseOptions): DynamicModule {
        const baseOptions = {
            provide: "BASEOPTIONS",
            useValue: options
        }

        const dbProvider = {
            provide: DbService,
            scope: Scope.DEFAULT,
            useFactory: async()=>{
                console.log('Inside Db Factory')
                const service = new DbService();
                await service.registerName(options.name);
                return service;
            }
        }

        const slowProvider = {
            provide: SlowService,
            scope: Scope.DEFAULT,
            useFactory: async()=>{
                console.log('Inside Slow Factory')
                const service = new SlowService();
                await service.registerName(options.name);
                return service;
            }
        }

        return {
            module: BaseCoreModule,
            providers: [
                dbProvider,
                slowProvider,
                baseOptions
            ],
            exports:[
                dbProvider, 
                slowProvider
            ]
        }
    }
}