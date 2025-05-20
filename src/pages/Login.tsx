import { useState } from 'react';

export default function Login({ onLogin }: { onLogin: (username: string) => void }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username) onLogin(username);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold">Cinemo</h2>
                <div className='mb-3'>
                    <div className='p-4'>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full input-form" />
                    </div>
                    <div className='pt-3'>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="Password" className="w-full input-form" />
                    </div>
                </div>
                <button className="button-login">Login</button>
            </form>
        </div>
    );
}
