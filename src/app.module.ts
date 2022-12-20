import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MyModuleModule } from './my-module/my-module.module';
// import { AnotherModuleModule } from './another-module/another-module.module';
import { MyModule } from './my-module/my-module.module';
import { AnotherModule } from './another-module/another-module.module';

@Module({
  imports: [MyModule, AnotherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
