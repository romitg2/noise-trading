'use client';

import { useSocket } from '@app/hooks/useSocket';

export default function Dashboard() {
    const { data } = useSocket();
    console.log("data: ", data);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Stocks</h2>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
