import { Icons } from '../assets/icons';
import { Transaction } from './TransactionsTable';
import { priceFormatter } from '../src/utils';

interface SummaryProps {
    transactions: Transaction[];
}

export function Summary({ transactions }: SummaryProps) {
    let incomeTotal = 0;
    let outcomeTotal = 0;
    let summaryTotal = 0;

    transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
            incomeTotal += transaction.value;
            summaryTotal += transaction.value;
        } else {
            outcomeTotal += transaction.value;
            summaryTotal -= transaction.value;
        }
        console.log('summary', summaryTotal);
    });

    return (
        <div className="grid grid-cols-3 gap-4 -mt-24">
            <div className="px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight text-gray-600">
                        Entradas
                    </span>
                    <Icons.Income className="w-6 h-6 text-green-500" />
                </div>
                <p className="mt-6 text-3xl font-medium">
                    {priceFormatter(incomeTotal)}
                </p>
            </div>
            <div className="px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight text-gray-600">
                        Saídas
                    </span>
                    <Icons.Expense className="w-6 h-6 text-red-500" />
                </div>
                <p className="mt-6 text-3xl font-medium ">
                    {priceFormatter(outcomeTotal)}
                </p>
            </div>
            <div className="px-6 py-5 bg-green-500 rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight text-white">
                        Total
                    </span>
                    <Icons.Money className="w-6 h-6 text-white" />
                </div>
                <p className="mt-6 text-3xl font-medium text-white">
                    {priceFormatter(summaryTotal)}
                </p>
            </div>
        </div>
    );
}
