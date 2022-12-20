import { Injectable } from '@nestjs/common';

@Injectable()
export class AnotherModuleService {
  async init() {
    // do something
    console.log('init from another-module.service.ts');
  }
}
