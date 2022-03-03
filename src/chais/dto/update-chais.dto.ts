import { PartialType } from '@nestjs/mapped-types';
import { CreateChaisDto } from './create-chais.dto';

// partialtypes makes every field optional
export class UpdateChaisDto extends PartialType(CreateChaisDto) {}
