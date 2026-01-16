import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourceDto } from './dto/create-cource.dto';
import { UpdateCourceDto } from './dto/update-cource.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CourceService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateCourceDto) {
    //@ts-ignore
    return this.prisma.course.create({ data: dto });
  }

  findAll() {
    return this.prisma.course.findMany();
  }
  
  findByStatus(status: string) {
    if (status !== 'PLANNED' && status !== 'ARCHIVED') {
      throw new BadRequestException('Course status is invalid');
    }
    return this.prisma.course.findMany({ where: { status } });
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateCourceDto) {
    //@ts-ignore
    return this.prisma.course.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
