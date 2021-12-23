import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TransactionsTable } from '../components/TransactionsTable';

interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
    return (
        <div className="">
            <Header />
            <div className="max-w-5xl px-4 py-10 mx-auto h-full">
                <Summary />
                <TransactionsTable />
            </div>
        </div>
    );
}
