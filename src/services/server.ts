import { Model, createServer } from 'miragejs';

export default function server() {
    const mockModels = {
        transaction: Model.extend({
            title: 'Compras Super10',
            value: 352,
            type: 'outcome',
            category: 'Mercado',
            date: String(new Date()),
        }),
    };

    createServer({
        models: mockModels,

        seeds(server) {
            server.create('transaction', {
                title: 'Compras Super10',
                value: 352,
                type: 'outcome',
                category: 'Mercado',
                date: String(new Date()),
            } as {});
            server.create('transaction', {
                title: 'Bicicleta vendida',
                value: 2000,
                type: 'income',
                category: 'Venda',
                date: String(new Date()),
            } as {});
            server.create('transaction', {
                title: 'Steak BBQ',
                value: 240,
                type: 'outcome',
                category: 'Restaurante',
                date: String(new Date()),
            } as {});
        },

        routes() {
            this.namespace = 'api';

            this.get('/transactions', (schema) => {
                return schema.all('transaction');
            });

            this.post('/transactions', (schema, request) => {
                const data = JSON.parse(request.requestBody);

                return schema.create('transaction', {
                    ...data,
                    date: new Date(),
                });
            });

            this.delete('/transactions/:id', (schema, request) => {
                const { id } = request.params;

                schema.find('transaction', id)?.destroy();

                return {};
            });
        },
    });
}
