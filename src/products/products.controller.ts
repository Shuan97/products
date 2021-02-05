import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Products } from 'src/classes/products';
import { Product } from 'src/classes/product';
import { ProductsService } from './products.service';


@Controller('items')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get('')
    async index(): Promise<Products> {
        return this.productService.getAll()
    }

    @Get(':id')
    async getItem(@Param('id') id:string): Promise<Product> {
        return this.productService.getItem(id)
    }

    @Post('')
    createItem(@Body() product: Product) {
        this.productService.createItem(product)
        return `Product created: ${product.name}`
    }

    @Put('')
    updateItem(id: string, @Body() product: Product) {
        this.productService.updateItem(id, product)
    }

    @Delete(':id')
    deleteItem(@Param('id') id: string) {
        this.productService.deleteItem(id)
    }
}
