import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    title: 'App freelance',
                    value: 12500,
                    category: 'Trabalho',
                    type: 'income',
                    date: '2021-10-14 10:23:54+02',
                },
                {
                    title: 'Aluguel',
                    value: 3800,
                    category: 'Moradia',
                    type: 'outcome',
                    date: '2021-04-29 11:59:54+02',
                },
                {
                    title: 'Consórcio Sonho Meu',
                    value: 8600,
                    category: 'Consórcio',
                    type: 'income',
                    date: '2021-03-08 23:10:54+02',
                },
            ];
        });
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
