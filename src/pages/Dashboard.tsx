import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TransactionsTable } from '../components/TransactionsTable';

export function Dashboard() {
    return (
        <>
            <Header />
            <div className="max-w-5xl mx-auto py-10 px-4">
                <Summary />
                <TransactionsTable />
            </div>
        </>
    );
}
