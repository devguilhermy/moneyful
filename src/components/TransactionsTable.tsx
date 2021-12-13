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
            value: 3500,
            category: 'Moradia',
            type: 'outcome',
            date: new Date(),
        },
    ]);

    return (
        <div className="mt-5">
            <table className="w-full border-spacing">
                <thead className="text-left">
                    <tr className="">
                        <th className="text-gray-500 cell-padding">Título</th>
                        <th className="text-gray-500 cell-padding">Valor</th>
                        <th className="text-gray-500 cell-padding">
                            Categoria
                        </th>
                        <th className="text-gray-500 cell-padding">Data</th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    {transactions.map((transaction, index) => {
                        return (
                            <tr className="bg-white shadow-md ">
                                <td className="cell-padding border-0 text-gray-800 rounded-l-md">
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
                                <td className="cell-padding border-0 text-gray-500">
                                    {transaction.category}
                                </td>
                                <td className="cell-padding border-0 text-gray-500 rounded-r-md">
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
