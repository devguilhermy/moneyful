import { dateFormatter, priceFormatter } from '../src/utils';

export interface Transaction {
    title: string;
    value: number;
    category: string;
    type: 'income' | 'outcome';
    date: string;
}

interface TransactionsTableProps {
    transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
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
                            <tr
                                className="font-medium bg-white shadow-md"
                                key={index}
                            >
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
