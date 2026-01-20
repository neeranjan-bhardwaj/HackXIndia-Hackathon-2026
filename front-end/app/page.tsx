'use client';

import { useState } from 'react';

export default function Page() {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(JSON.stringify(result, null, 2));
        } catch (error) {
            console.error(error);
            setData('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Fetch Data Example</h1>
            <button onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Data'}
            </button>
            {data && (
                <pre style={{ marginTop: '20px', background: '#f4f4f4', padding: '10px' }}>
                    {data}
                </pre>
            )}
        </div>
    );
}