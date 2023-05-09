import { PartialType } from '@nestjs/mapped-types';
import { CreateGroundhogDto } from './create-groundhog.dto';

export class UpdateGroundhogDto extends PartialType(CreateGroundhogDto) {
  id: number;
}
