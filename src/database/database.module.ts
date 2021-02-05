import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb'

@Module({
    providers: [
        {
            provide: 'DATABASE_CONNECTION',
            useFactory: async(): Promise<Db> => {
                try {
                    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.x1xj9.mongodb.net/lab?retryWrites=true&w=majority', {
                        useUnifiedTopology: true
                    });

                    return client.db('lab');
                } catch (err) {
                    throw err
                }
            }
        },
    ],
    exports: ['DATABASE_CONNECTION']
})
export class DatabaseModule {}
