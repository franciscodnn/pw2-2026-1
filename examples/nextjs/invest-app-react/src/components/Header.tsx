import Link from "next/link";

export default function Header({ children }: {children: React.ReactNode}) {
    return (
        <header className="grid grid-cols-3 items-center my-12">
            <span />
            <h1 id="header" className="text-center text-2xl font-bold">
                { children }
            </h1>
            <div className="flex justify-end pr-4">
                
                <Link href="/novo" className="bg-gray-400 hover:bg-gray-800 hover:text-gray-200 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                    +
                </Link>
            </div>
        </header>
    );
}