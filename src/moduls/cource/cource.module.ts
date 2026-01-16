import { Module } from '@nestjs/common';
import { CourceService } from './cource.service';
import { CourceController } from './cource.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  controllers: [CourceController],
  providers: [CourceService],
  imports: [PrismaModule]
})
export class CourceModule {}
