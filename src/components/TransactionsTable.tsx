import { dateFormatter, priceFormatter } from '../src/utils';

import { useState } from 'react';

export function TransactionsTable() {
    const [transactions, setTransactions] = useState([
        {
            title: 'App freelance',
            value: 12500,
            category: 'Trabalho',
            type: 'income',
            date: new Date(),
        },
        {
            title: 'Aluguel',
            value: -3500,
            category: 'Moradia',
            type: 'outcome',
            date: new Date(),
        },
        {
            title: 'Consórcio Sonho Meu',
            value: 8000,
            category: 'Consórcio',
            type: 'income',
            date: new Date(),
        },
    ]);

    return (
        <div className="mt-5">
            <table className="w-full border-spacing">
                <thead className="">
                    <tr className="">
                        <th className="leading-6 text-left text-gray-500 cell-padding">
                            Título
                        </th>
                        <th className="leading-6 text-left text-gray-500 cell-padding">
                            Valor
                        </th>
                        <th className="leading-6 text-left text-gray-500 cell-padding">
                            Categoria
                        </th>
                        <th className="leading-6 text-left text-gray-500 cell-padding">
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    {transactions.map((transaction, index) => {
                        return (
                            <tr className="font-medium bg-white shadow-md">
                                <td className="text-gray-800 border-0 cell-padding rounded-l-md">
                                    {transaction.title}
                                </td>
                                <td
                                    className={`cell-padding border-0  ${
                                        transaction.type === 'income'
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {priceFormatter(transaction.value)}
                                </td>
                                <td className="text-gray-500 border-0 cell-padding">
                                    {transaction.category}
                                </td>
                                <td className="text-gray-500 border-0 cell-padding rounded-r-md">
                                    {dateFormatter(transaction.date)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
