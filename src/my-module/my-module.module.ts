import { Module, OnModuleInit } from '@nestjs/common';
import { MyModuleService } from './my-module.service';

@Module({
  imports: [],
  controllers: [],
  providers: [MyModuleService],
  exports: [MyModule, MyModuleService],
})
export class MyModule implements OnModuleInit {
  constructor(private readonly myService: MyModuleService) {}

  async onModuleInit() {
    // you can perform asynchronous tasks here
    await this.myService.init();
    await this.myService.keyCloackInit();
  }
}
