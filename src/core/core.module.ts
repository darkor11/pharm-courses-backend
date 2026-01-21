import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { ConfigModule } from '@nestjs/config';
import { CourceModule } from 'src/moduls/cource/cource.module';
import { PrismaModule } from './prisma/prisma.module';
import { RegistrationModule } from 'src/moduls/registration/registration.module';
import { CertificateTemplateModule } from 'src/moduls/certificate-template/certificate-template.module';
import { AuthModule } from 'src/moduls/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    CourceModule,
    RegistrationModule,
    CertificateTemplateModule,
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
