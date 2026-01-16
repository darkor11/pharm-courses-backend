import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourceService } from './cource.service';
import { CreateCourceDto } from './dto/create-cource.dto';
import { UpdateCourceDto } from './dto/update-cource.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('cource')
export class CourceController {
  constructor(private readonly courceService: CourceService) {}

  @Post()
  @ApiBody({ type: CreateCourceDto })
  create(@Body() createCourceDto: CreateCourceDto) {
    return this.courceService.create(createCourceDto);
  }

  @Get()
  findAll() {
    return this.courceService.findAll();
  }
  @Get('/status/:status')
  findByStatus(@Param('status') id: string) {
    return this.courceService.findByStatus(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCourceDto) {
    return this.courceService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courceService.remove(+id);
  }
}
