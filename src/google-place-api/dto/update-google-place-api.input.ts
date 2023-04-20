import { CreateGooglePlaceApiInput } from './create-google-place-api.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGooglePlaceApiInput extends PartialType(CreateGooglePlaceApiInput) {
  id: number;
}
