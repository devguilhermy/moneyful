import { Transaction, TransactionsProvider } from './hooks/useTransactions';

import { Dashboard } from './pages/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { useState } from 'react';

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    const [transactionToUpdate, setTransactionToUpdate] =
        useState<Transaction>();

    function handleToggleNewTransactionModal(state?: boolean) {
        setIsNewTransactionModalOpen(state || !isNewTransactionModalOpen);
    }

    return (
        <>
            <TransactionsProvider>
                <Dashboard
                    onToggleNewTransactionModal={
                        handleToggleNewTransactionModal
                    }
                    setTransactionToUpdate={setTransactionToUpdate}
                />
                <NewTransactionModal
                    isOpen={isNewTransactionModalOpen}
                    onToggle={handleToggleNewTransactionModal}
                    transactionToUpdate={transactionToUpdate}
                    setTransactionToUpdate={setTransactionToUpdate}
                />
            </TransactionsProvider>
        </>
    );
}
