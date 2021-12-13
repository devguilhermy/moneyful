import logoImg from '../assets/images/logo.svg';

export function Header() {
    return (
        <header className="bg-indigo-600">
            <div className="max-w-5xl mx-auto flex items-center justify-between pb-40 px-4 pt-8">
                <img src={logoImg} alt="Moneyful logo" />
                <button
                    type="button"
                    className="text-white bg-indigo-500 py-2 px-3 rounded-md hover:bg-indigo-400 transition focus:outline-none focus:ring focus:ring-white"
                >
                    Nova transação
                </button>
            </div>
        </header>
    );
}
