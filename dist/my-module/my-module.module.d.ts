import { OnModuleInit } from '@nestjs/common';
import { MyModuleService } from './my-module.service';
export declare class MyModule implements OnModuleInit {
    private readonly myService;
    constructor(myService: MyModuleService);
    onModuleInit(): Promise<void>;
}
