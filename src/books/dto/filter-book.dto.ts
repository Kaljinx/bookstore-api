import { IsOptional, IsString, IsNumber } from 'class-validator';

export class FilterBookDto {
  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
