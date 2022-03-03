import { IsString } from 'class-validator';

export class CreateChaisDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavours: string[];
}
