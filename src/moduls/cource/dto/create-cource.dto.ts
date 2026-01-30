import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  isString,
  IsString,
} from 'class-validator';
import { CourseStatus } from 'prisma/generated/enums';

export class CreateCourceDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  endDate?: Date;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsEnum(CourseStatus)
  status: CourseStatus;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  certificateTemplateId?: number;
}
