import { Icons } from '../assets/icons';

export function Summary() {
    return (
        <div className="grid grid-cols-3 gap-4 -mt-32">
            <div className="bg-white px-6 py-5 rounded-md shadow-md">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 tracking-tight font-medium">
                        Entradas
                    </span>
                    <Icons.Income className="text-green-500 w-6 h-6" />
                </div>
                <p className="text-3xl font-semibold mt-6">R$ 12.800,00</p>
            </div>
            <div className="bg-white px-6 py-5 rounded-md shadow-md">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 tracking-tight font-medium">
                        Saídas
                    </span>
                    <Icons.Expense className="text-red-500 w-6 h-6" />
                </div>
                <p className="text-3xl font-semibold mt-6">R$ 2.950,00</p>
            </div>
            <div className="bg-green-500 px-6 py-5 rounded-md shadow-md">
                <div className="flex justify-between items-center">
                    <span className="text-white tracking-tight font-medium">
                        Total
                    </span>
                    <Icons.Money className="text-white w-6 h-6" />
                </div>
                <p className="text-3xl font-semibold mt-6 text-white">
                    R$ 9.850,00
                </p>
            </div>
        </div>
    );
}
