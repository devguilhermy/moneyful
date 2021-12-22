import { dateFormatter, priceFormatter } from '../src/utils';

import { Icons } from '../assets/icons';
import { useTransactions } from '../hooks/useTransactions';

interface TransactionsTableProps {}

export function TransactionsTable(props: TransactionsTableProps) {
    const { transactions, deleteTransaction } = useTransactions();

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
                        <th className="leading-6 text-left text-gray-500 cell-padding"></th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    {transactions.map((transaction) => {
                        return (
                            <tr
                                className="font-medium bg-white shadow-md"
                                key={transaction.id}
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
                                <td className="text-gray-500 border-0 cell-padding ">
                                    {dateFormatter(transaction.date)}
                                </td>
                                <td className="text-gray-500 border-0 cell-padding rounded-r-md flex items-center justify-center gap-1">
                                    <button
                                        className="bg-gray-200 shadow rounded-full p-1 text-gray-700 hover:bg-gray-300 transition"
                                        onClick={() =>
                                            deleteTransaction(transaction.id)
                                        }
                                    >
                                        <Icons.Close className="w-5 h-5" />
                                    </button>
                                    <button className="bg-gray-200 shadow rounded-full p-1 text-gray-700 hover:bg-gray-300 transition">
                                        <Icons.Edit className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
