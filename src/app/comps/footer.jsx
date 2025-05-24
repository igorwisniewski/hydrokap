import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-10  z-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-2 text-hydro-900"><span className="text-hydro-500">Hydro</span>kap</h3>
                    <p className="text-sm">Ziemia i woda pod kontrolą.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Linki</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/public" className="hover:underline">Strona główna</Link></li>
                        <li><Link href="/aboutUs" className="hover:underline">O nas</Link></li>
                        <li><Link href="/services" className="hover:underline">Usługi</Link></li>
                        <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Kontakt</h4>
                    <p className="text-sm">Zamieście 251<br /> 34-650 Tymbark<br />tel: +48 501 769 247<br />email: kontakt@hydrokap.pl</p>
                </div>
            </div>
            <div className="text-center mt-8 text-xs text-gray-400">&copy; 2025 Hydrokap. Wszelkie prawa zastrzeżone. Stworzone przez <Link href={"https://wisstack.pl/"}>WISSTACK</Link></div>
        </footer>
    )
}