import { OnModuleInit } from '@nestjs/common';
import { MyModule } from '../my-module/my-module.module';
import { AnotherModuleService } from './another-module.service';
export declare class AnotherModule implements OnModuleInit {
    private readonly myModule;
    private readonly anotherModuleService;
    constructor(myModule: MyModule, anotherModuleService: AnotherModuleService);
    onModuleInit(): Promise<void>;
}
