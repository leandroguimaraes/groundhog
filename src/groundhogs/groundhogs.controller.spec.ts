import { Test, TestingModule } from '@nestjs/testing';
import { GroundhogsController } from './groundhogs.controller';
import { GroundhogsService } from './groundhogs.service';

describe('GroundhogsController', () => {
  let controller: GroundhogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroundhogsController],
      providers: [GroundhogsService],
    }).compile();

    controller = module.get<GroundhogsController>(GroundhogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
