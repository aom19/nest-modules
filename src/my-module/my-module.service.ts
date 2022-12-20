import { Injectable } from '@nestjs/common';

@Injectable()
export class MyModuleService {
  async init() {
    // do somethingc
    console.log('init from my-module.service.ts');
  }

  async keyCloackInit() {
    console.log('keyCloackInit from my-module.service.ts');
  }
}
