import { ReactNode, createContext, useContext, useState } from 'react';

interface NewTransactionModalProviderProps {
    children: ReactNode;
}

interface NewTransactionModalContextProps {
    isModalOpen: boolean;
    setIsModalOpen: (status: boolean) => void;
}

const NewTransactionModalContext =
    createContext<NewTransactionModalContextProps>(
        {} as NewTransactionModalContextProps
    );

export function NewTransactionModalProvider({
    children,
}: NewTransactionModalProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <NewTransactionModalContext.Provider
            value={{ isModalOpen, setIsModalOpen }}
        >
            {children}
        </NewTransactionModalContext.Provider>
    );
}

export function useNewTransactionModal() {
    const context = useContext(NewTransactionModalContext);

    return context;
}
