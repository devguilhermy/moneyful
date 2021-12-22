import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import { AxiosResponse } from 'axios';
import { api } from '../services/api';

export interface Transaction {
    id: number;
    title: string;
    value: number;
    category: string;
    type: 'income' | 'outcome';
    date: string;
}

type NewTransaction = Omit<Transaction, 'id' | 'date'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextProps {
    transactions: Transaction[];
    createTransaction: (
        transaction: NewTransaction
    ) => Promise<AxiosResponse<any, any>>;
    getTransaction: (transaction_id: number) => Promise<AxiosResponse<any>>;
    updateTransaction: (
        transactionUpdated: Transaction
    ) => Promise<AxiosResponse<any>>;
    deleteTransaction: (transaction_id: number) => void;
}

const TransactionsContext = createContext<TransactionContextProps>(
    {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions').then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    async function createTransaction(newTransaction: NewTransaction) {
        const response = await api.post('/transactions', newTransaction);

        if (response.status === 201) {
            const { transaction } = response.data;
            setTransactions([...transactions, transaction]);
        }

        return response;
    }

    async function getTransaction(transaction_id: number) {
        const response = await api.get(`/transactions/${transaction_id}`);

        return response;
    }

    async function updateTransaction(transactionUpdated: Transaction) {
        const response = await api.patch(
            `/transactions/${transactionUpdated.id}`,
            transactionUpdated
        );

        if (response.status === 200) {
            const newTransactionsList = [...transactions];

            const toEditIndex = newTransactionsList.findIndex(
                (transaction) => transaction.id === transactionUpdated.id
            );

            newTransactionsList[toEditIndex] = transactionUpdated;

            setTransactions(newTransactionsList);
        }

        return response;
    }

    async function deleteTransaction(transaction_id: number) {
        const response = await api.delete(`/transactions/${transaction_id}`);

        if (response.status === 200) {
            const newTransactionsList = [...transactions].filter(
                (transaction) => transaction.id !== transaction_id
            );

            setTransactions(newTransactionsList);
        }

        return response;
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                createTransaction,
                getTransaction,
                updateTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const transactionsContext = useContext(TransactionsContext);

    return transactionsContext;
}
