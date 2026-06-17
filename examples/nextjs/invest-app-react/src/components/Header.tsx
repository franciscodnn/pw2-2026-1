'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

import EyeIcon from '@iconify-react/lucide/eye';
import EyeOffIcon from '@iconify-react/lucide/eye-off';
import LogOutIcon from '@iconify-react/lucide/log-out';

import { useContext } from 'react';

import { VisualizavelContext } from "@/contexts/VisualizavelContext";
import { useUserAuth } from "@/contexts/UserAuthContext";

export default function Header({ children }: {children: React.ReactNode}) {
    const { visualizavel, setVisualizavel } = useContext(VisualizavelContext);
    const { logOut } = useUserAuth();
    const router = useRouter();

    function handleClick() {
        setVisualizavel(!visualizavel);
    }

    async function handleLogout() {
        await logOut();
        router.push('/login');
    }

    return (
        <header className="grid grid-cols-3 items-center my-12">
            <span />
            <h1 id="header" className="text-center text-2xl font-bold">
                { children }
            </h1>
            <div className="flex justify-end pr-4">
                <span className="flex items-center justify-center">
                    <button
                        className="bg-gray-400 hover:bg-gray-800 hover:text-gray-200 p-2 m-2 rounded-full"
                        onClick={ handleClick }>

                        { visualizavel ? <EyeOffIcon height="1em" /> : <EyeIcon height="1em" /> }
                    </button>
                    
                    <Link href="/novo" className="bg-gray-400 hover:bg-gray-800 hover:text-gray-200 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                        +
                    </Link>

                    <button
                        className="bg-gray-400 hover:bg-gray-800 hover:text-gray-200 p-2 m-2 rounded-full"
                        onClick={ handleLogout }
                    >
                        <LogOutIcon height="1em" />
                    </button>
                </span>
            </div>
        </header>
    );
}