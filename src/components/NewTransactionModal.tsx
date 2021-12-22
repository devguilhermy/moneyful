import { FormEvent, useState } from 'react';

import { Icons } from '../assets/icons';
import Modal from 'react-modal';
import { useTransactions } from '../hooks/useTransactions';

Modal.setAppElement('#root');
interface NewTransactionModalProps {
    isOpen: boolean;
    onToggle: (state?: boolean) => void;
}

export function NewTransactionModal({
    isOpen,
    onToggle,
}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [type, setType] = useState<'income' | 'outcome'>('income');
    const [category, setCategory] = useState('');

    const { createTransaction } = useTransactions();

    async function handleSubmitNewTransaction(event: FormEvent) {
        event.preventDefault();

        const response = await createTransaction({
            title,
            value,
            type,
            category,
        });

        if (response.status === 201) {
            console.log(response.statusText);
            onToggle(false);

            setTitle('');
            setValue(0);
            setType('income');
            setCategory('');
        } else {
            console.error(response);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onToggle(false)}
            contentLabel="Demo"
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-content'}
        >
            <button
                className="react-modal-close"
                onClick={() => onToggle(false)}
            >
                <Icons.Close className="w-6 h-6" />
            </button>
            <form onSubmit={handleSubmitNewTransaction}>
                <h2 className="text-2xl font-semibold">Cadastrar transação</h2>
                <label className="block w-full mt-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="w-full px-4 py-4 text-gray-600 bg-gray-100 border rounded-md"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <label className="block w-full mt-2">
                    <input
                        type="number"
                        placeholder="Valor"
                        className="w-full px-4 py-4 text-gray-600 bg-gray-100 border rounded-md"
                        value={value}
                        onChange={(event) =>
                            setValue(Number(event.target.value))
                        }
                    />
                </label>
                <fieldset className="flex w-full gap-2 mt-2">
                    <button
                        type="button"
                        className={`flex items-center justify-center w-1/2 py-4 transition border rounded-md hover:border-gray-500 ${
                            type === 'income' && 'bg-green-500 bg-opacity-20'
                        }`}
                        onClick={() => setType('income')}
                    >
                        <Icons.Income className="w-6 h-6 text-green-500" />
                        <span className="inline-block ml-4 text-base text-gray-700">
                            Entrada
                        </span>
                    </button>
                    <button
                        type="button"
                        className={`flex items-center justify-center w-1/2 py-4 transition border rounded-md hover:border-gray-500 ${
                            type === 'outcome' && 'bg-red-500 bg-opacity-20'
                        }`}
                        onClick={() => setType('outcome')}
                    >
                        <Icons.Expense className="w-6 h-6 text-red-500" />
                        <span className="inline-block ml-4 text-base text-gray-700">
                            Saída
                        </span>
                    </button>
                </fieldset>
                <label className="block w-full mt-2">
                    <input
                        type="text"
                        placeholder="Categoria"
                        className="w-full px-4 py-4 text-gray-600 bg-gray-100 border rounded-md"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    className="w-full px-4 py-4 mt-4 text-lg font-semibold text-white transition bg-green-500 rounded-md hover:bg-green-600"
                >
                    Cadastrar
                </button>
            </form>
        </Modal>
    );
}
