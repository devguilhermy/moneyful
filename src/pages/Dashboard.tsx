import {
    Transaction,
    TransactionsTable,
} from '../components/TransactionsTable';
import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { api } from '../services/api';

interface DashboardProps {
    onToggleNewTransactionModal: (state?: boolean) => void;
}

export function Dashboard({ onToggleNewTransactionModal }: DashboardProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            title: 'Carregando',
            value: 0,
            category: 'Carregando',
            type: 'income',
            date: String(new Date()),
        },
    ]);

    useEffect(() => {
        api.get('https://localhost:3000/api/transactions').then((response) =>
            setTransactions(response.data)
        );
    }, []);

    return (
        <>
            <Header onToggleNewTransactionModal={onToggleNewTransactionModal} />
            <div className="max-w-5xl px-4 py-10 mx-auto">
                <Summary transactions={transactions} />
                <TransactionsTable transactions={transactions} />
            </div>
        </>
    );
}
