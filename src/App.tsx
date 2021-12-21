import { Dashboard } from './pages/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { useState } from 'react';

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(true);

    function handleToggleNewTransactionModal(state?: boolean) {
        setIsNewTransactionModalOpen(state || !isNewTransactionModalOpen);
    }

    return (
        <>
            <Dashboard
                onToggleNewTransactionModal={handleToggleNewTransactionModal}
            />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onToggle={handleToggleNewTransactionModal}
            />
        </>
    );
}
