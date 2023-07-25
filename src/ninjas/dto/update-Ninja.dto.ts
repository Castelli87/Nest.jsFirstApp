import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-Ninja.dto';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}
