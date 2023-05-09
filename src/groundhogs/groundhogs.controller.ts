import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroundhogsService } from './groundhogs.service';
import { CreateGroundhogDto } from './dto/create-groundhog.dto';
import { UpdateGroundhogDto } from './dto/update-groundhog.dto';

@Controller('groundhogs')
export class GroundhogsController {
  constructor(private readonly groundhogsService: GroundhogsService) {}

  @Post()
  create(@Body() createGroundhogDto: CreateGroundhogDto) {
    return this.groundhogsService.create(createGroundhogDto);
  }

  @Get()
  findAll() {
    return this.groundhogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groundhogsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroundhogDto: UpdateGroundhogDto,
  ) {
    return this.groundhogsService.update(+id, updateGroundhogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groundhogsService.delete(+id);
  }
}
