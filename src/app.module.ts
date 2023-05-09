import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { GroundhogsModule } from './groundhogs/groundhogs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    GroundhogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
