import { Test, TestingModule } from '@nestjs/testing';
import { AnotherModuleService } from './another-module.service';

describe('AnotherModuleService', () => {
  let service: AnotherModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnotherModuleService],
    }).compile();

    service = module.get<AnotherModuleService>(AnotherModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
