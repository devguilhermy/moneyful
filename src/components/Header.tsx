import logoImg from '../assets/images/logo.svg';

interface HeaderProps {
    onToggleNewTransactionModal: (state?: boolean) => void;
}

export function Header({ onToggleNewTransactionModal }: HeaderProps) {
    return (
        <header className="bg-indigo-600">
            <div className="flex items-center justify-between max-w-5xl px-4 pt-8 pb-32 mx-auto">
                <img src={logoImg} alt="Moneyful logo" />
                <button
                    type="button"
                    className="px-3 py-2 text-white transition bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-white"
                    onClick={() => onToggleNewTransactionModal(true)}
                >
                    Nova transação
                </button>
            </div>
        </header>
    );
}
