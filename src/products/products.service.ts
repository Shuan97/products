import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Products } from 'src/classes/products';
import { Product } from 'src/classes/product';
import { Db, ObjectID } from 'mongodb' 
import { Debugger } from 'inspector';

@Injectable()
export class ProductsService {
    constructor(
        @Inject('DATABASE_CONNECTION')
        private db: Db,
    ) {}

    private readonly products = this.db.collection('products');

    async getAll(): Promise<Products> {
        // return this.products;
        return await this.products.find().toArray();
    }

    async getItem(id: string): Promise<Product> {
        if (!ObjectID.isValid(id)) {
            throw new BadRequestException;
          }
        const response = await this.products.findOne({
            _id: new ObjectID(id)
        })

        if(!response) {
            console.error("Produkt nie został znaleziony")
            throw new NotFoundException;
        }

        return response;
    }

    async createItem(newItem: Product): Promise<Product> {
        await this.products.insertOne(newItem);
        return newItem;
    }

    async updateItem(id: string, product: Product) {
        if (!ObjectID.isValid(id)) {
            throw new BadRequestException;
          }
      
          await this.products.updateOne(
            {
              _id: new ObjectID(id),
            },
            {
              $set: {
                ...product,
              },
            },
          );
    }
    
    async deleteItem(id: string): Promise<void> {
        if (!ObjectID.isValid(id)) {
            throw new BadRequestException;
          }
      
          const response = await this.products.deleteOne({
            _id: new ObjectID(id),
          });
      
          if (response.deletedCount === 0) {
            throw new NotFoundException;
          }
        }
}
