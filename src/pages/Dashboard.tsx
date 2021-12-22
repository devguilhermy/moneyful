import { Transaction, useTransactions } from '../hooks/useTransactions';

import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TransactionsTable } from '../components/TransactionsTable';

interface DashboardProps {
    onToggleNewTransactionModal: (state?: boolean) => void;
    setTransactionToUpdate: (transaction: Transaction) => void;
}

export function Dashboard({
    onToggleNewTransactionModal,
    setTransactionToUpdate,
}: DashboardProps) {
    const { getTransaction } = useTransactions();

    async function handleUpdateTransaction(transaction_id: number) {
        const response = await getTransaction(transaction_id);
        setTransactionToUpdate(response.data.transaction);
        onToggleNewTransactionModal(true);
    }

    return (
        <div className="">
            <Header onToggleNewTransactionModal={onToggleNewTransactionModal} />
            <div className="max-w-5xl px-4 py-10 mx-auto h-full">
                <Summary />
                <TransactionsTable
                    handleUpdateTransaction={handleUpdateTransaction}
                />
            </div>
        </div>
    );
}
