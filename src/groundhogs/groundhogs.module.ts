import { Module } from '@nestjs/common';
import { GroundhogsService } from './groundhogs.service';
import { GroundhogsController } from './groundhogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groundhog } from './entities/groundhog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Groundhog])],
  controllers: [GroundhogsController],
  providers: [GroundhogsService],
})
export class GroundhogsModule {}
