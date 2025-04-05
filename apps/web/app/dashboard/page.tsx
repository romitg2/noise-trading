'use client';

import { useSocket } from '@app/hooks/useSocket';

export default function Dashboard() {
    const { data } = useSocket();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Prices</h2>
                    {data && (
                        <ul className="space-y-3">
                            {Object.entries(data).map(([stock, price]) => (
                                <li key={stock} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150">
                                    <span className="text-gray-700 font-medium">{stock.replace('stock:', '')}</span>
                                    <span className="text-green-600 font-semibold">${price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {!data && (
                        <div className="text-center py-8 text-gray-500">
                            Loading stock prices...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
