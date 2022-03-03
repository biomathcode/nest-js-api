import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { ChaisService } from 'src/chais/chais.service';
import { CreateChaisDto } from './dto/create-chais.dto';
import { UpdateChaisDto } from './dto/update-chais.dto';
import { Chai } from './entities/chai.entities';

@Controller('chais')
export class ChaiController {
  constructor(private readonly chaisService: ChaisService) {}
  @Get()
  findall(@Query() PaginationQuery) {
    // const { limit, offset } = PaginationQuery;
    return this.chaisService.findAll();
  }
  @Get(':id')
  findone(@Param('id') id: string) {
    return this.chaisService.findOne(id);
  }

  @Post()
  create(@Body() createChaiDto: CreateChaisDto) {
    console.log(createChaiDto instanceof CreateChaisDto);
    return this.chaisService.create(createChaiDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, updateChaiDto: UpdateChaisDto) {
    return this.chaisService.update(id, updateChaiDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.chaisService.remove(id);
  }
  //pagination example
}
