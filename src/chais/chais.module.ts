import { Module } from '@nestjs/common';
import { ChaiController } from './chais.controller';
import { ChaisService } from './chais.service';

@Module({
  controllers: [ChaiController],
  providers: [ChaisService],
})
export class ChaisModule {}
