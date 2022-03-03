import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ChaisModule } from './chais/chais.module';

@Module({
  imports: [ChaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
