import { Module } from '@nestjs/common';
import { GooglePlaceApiService } from './google-place-api.service';
import { GooglePlaceApiResolver } from './google-place-api.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GooglePlaceApiResolver, GooglePlaceApiService],
})
export class GooglePlaceApiModule {}
