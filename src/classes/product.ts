import { IsInt, IsString } from 'class-validator';

export class Product {
  @IsInt() readonly id: number;
  @IsString() readonly name: string;
  @IsString() readonly description: string;
  @IsInt() readonly price: number;
}
