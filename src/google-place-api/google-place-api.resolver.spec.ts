import { Test, TestingModule } from '@nestjs/testing';
import { GooglePlaceApiResolver } from './google-place-api.resolver';
import { GooglePlaceApiService } from './google-place-api.service';

describe('GooglePlaceApiResolver', () => {
  let resolver: GooglePlaceApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GooglePlaceApiResolver, GooglePlaceApiService],
    }).compile();

    resolver = module.get<GooglePlaceApiResolver>(GooglePlaceApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
