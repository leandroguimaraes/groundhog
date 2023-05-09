import { Test, TestingModule } from '@nestjs/testing';
import { GroundhogsService } from './groundhogs.service';

describe('GroundhogsService', () => {
  let service: GroundhogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroundhogsService],
    }).compile();

    service = module.get<GroundhogsService>(GroundhogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
