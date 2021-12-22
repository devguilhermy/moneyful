import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TransactionsTable } from '../components/TransactionsTable';

interface DashboardProps {
    onToggleNewTransactionModal: (state?: boolean) => void;
}

export function Dashboard({ onToggleNewTransactionModal }: DashboardProps) {
    return (
        <div className="">
            <Header onToggleNewTransactionModal={onToggleNewTransactionModal} />
            <div className="max-w-5xl px-4 py-10 mx-auto h-full">
                <Summary />
                <TransactionsTable />
            </div>
        </div>
    );
}
