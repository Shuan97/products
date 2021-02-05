import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class Product {
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}
