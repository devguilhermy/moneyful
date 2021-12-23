import { Dashboard } from './pages/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { NewTransactionModalProvider } from './hooks/useNewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
    return (
        <>
            <NewTransactionModalProvider>
                <TransactionsProvider>
                    <Dashboard />
                    <NewTransactionModal />
                </TransactionsProvider>
            </NewTransactionModalProvider>
        </>
    );
}
