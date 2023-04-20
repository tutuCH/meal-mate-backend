import { Test, TestingModule } from '@nestjs/testing';
import { GooglePlaceApiService } from './google-place-api.service';

describe('GooglePlaceApiService', () => {
  let service: GooglePlaceApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GooglePlaceApiService],
    }).compile();

    service = module.get<GooglePlaceApiService>(GooglePlaceApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
