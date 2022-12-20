import { Module, OnModuleInit } from '@nestjs/common';
// import { MyModule } from './my.module';
import { MyModule } from '../my-module/my-module.module';
import { AnotherModuleService } from './another-module.service';

@Module({
  imports: [MyModule],
  controllers: [],
  providers: [AnotherModuleService],
  exports: [MyModule, AnotherModuleService],
})
export class AnotherModule implements OnModuleInit {
  constructor(
    private readonly myModule: MyModule,
    private readonly anotherModuleService: AnotherModuleService,
  ) {}

  async onModuleInit() {
    console.log('----another-module.module.ts INIT-----');
    await this.myModule.onModuleInit();
    await this.anotherModuleService.init();
    // perform additional initialization tasks
  }
}
