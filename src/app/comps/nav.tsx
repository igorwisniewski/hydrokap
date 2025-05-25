'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

export default function NavDefault() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-4 z-50">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold whitespace-nowrap">
                        <Link href="/" className="text-hydro-500"><span className="text-hydro-900">HYDRO</span>KAP</Link>
                    </h1>

                    <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                        <li><Link href="/aboutUs" className="transition hover:text-hydro-500">O nas</Link></li>
                        <li><Link href="/services" className="transition hover:text-hydro-500">Usługi</Link></li>
                        <li><Link href="/faq" className="transition hover:text-hydro-500">FAQ</Link></li>
                        <li><Link href="/contact" className="transition hover:text-hydro-500">Kontakt</Link></li>
                    </ul>

                    <Link
                        href="/contact"
                        className="hidden md:inline-block bg-hydro-600 text-gray-100 text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-gray-100 hover:text-hydro-600 transition"
                    >
                        Zadzwoń teraz
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden ml-4 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                    </button>
                </div>
            </nav>

            <div
                className={`
                    fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[90%] 
                    bg-white/95 backdrop-blur-md rounded-xl shadow-lg z-40 
                    origin-top transition-all duration-300 ease-in-out
                    ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
                `}
                style={{ transformOrigin: 'top' }}
            >
                <ul className="flex flex-col items-center space-y-4 p-6 text-base font-medium">
                    <li><Link href="/aboutUs" onClick={() => setIsOpen(false)} className="hover:text-hydro-500">O
                        nas</Link></li>
                    <li><Link href="/services" onClick={() => setIsOpen(false)}
                              className="hover:text-hydro-500">Usługi</Link></li>
                    <li><Link href="/faq" onClick={() => setIsOpen(false)}
                              className="hover:text-hydro-500">FAQ</Link></li>

                    <li><Link href="/contact" onClick={() => setIsOpen(false)}
                              className="hover:text-hydro-500">Kontakt</Link></li>
                </ul>
            </div>
        </>
    )
}