import { Dashboard } from './pages/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { useState } from 'react';

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

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
                />
                <NewTransactionModal
                    isOpen={isNewTransactionModalOpen}
                    onToggle={handleToggleNewTransactionModal}
                />
            </TransactionsProvider>
        </>
    );
}
