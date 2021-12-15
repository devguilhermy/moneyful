import { Icons } from '../assets/icons';

export function Summary() {
    return (
        <div className="grid grid-cols-3 gap-4 -mt-24">
            <div className="px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight text-gray-600">
                        Entradas
                    </span>
                    <Icons.Income className="w-6 h-6 text-green-500" />
                </div>
                <p className="mt-6 text-3xl font-semibold">R$ 12.800,00</p>
            </div>
            <div className="px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight text-gray-600">
                        Saídas
                    </span>
                    <Icons.Expense className="w-6 h-6 text-red-500" />
                </div>
                <p className="mt-6 text-3xl font-semibold">R$ 2.950,00</p>
            </div>
            <div className="px-6 py-5 bg-green-500 rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight text-white">
                        Total
                    </span>
                    <Icons.Money className="w-6 h-6 text-white" />
                </div>
                <p className="mt-6 text-3xl font-semibold text-white">
                    R$ 9.850,00
                </p>
            </div>
        </div>
    );
}
