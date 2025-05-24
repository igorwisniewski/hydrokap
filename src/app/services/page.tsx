'use client'
import Image from "next/image";
import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import { useEffect, useState, useRef } from "react";
import styles from "../comps/Main.module.css";
import Link from "next/link";
import CookieBanner from "@/app/comps/CookieBannner";

export default function ServicesPage() {
    // @ts-expect-error zwykle
    const FadeInSection = ({ children }) => {
        const [isVisible, setVisible] = useState(false);
// @ts-expect-error zwykle

        const domRef = useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            // @ts-expect-error zwykle

            observer.observe(domRef.current);
            return () => observer.disconnect();
        }, []);



        return (
            <div
                className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
                // @ts-expect-error zwykle


                ref={domRef}
            >
                {children}
            </div>
        );
    };
    return (
        <>
            <NavDefault />

            {/* HERO */}
            <section className="relative w-full h-[60vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-hydro-300 to-hydro-900  z-10" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nasze Usługi</h1>
                    <p className="text-lg md:text-xl">Kompleksowe roboty ziemne i przyłącza – od A do Z</p>
                </div>
            </section>

            {/* USŁUGI */}
            <section className="bg-white py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Przyłącza kanalizacji */}
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <Image src="/images/kanalizacja.webp" alt="Przyłącza kanalizacji" width={600} height={400} className="rounded-lg shadow-lg" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-hydro-600 mb-4">Przyłącza kanalizacji</h2>
                                <p className="text-gray-700 mb-4">
                                    Wykonujemy kompleksowe przyłącza kanalizacyjne – od projektu po odbiór. Nasze usługi obejmują także wykonanie dokumentacji i uzgodnień.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Projekt i wykonanie</li>
                                    <li>Nowoczesne maszyny i sprzęt</li>
                                    <li>Obsługa zgłoszeń i odbiorów</li>
                                </ul>
                                <Link href="/contact" className="inline-block mt-4 bg-hydro-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-hydro-600 transition">Skontaktuj się</Link>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Przyłącza wodociągu */}
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-10 items-center flex-row-reverse">
                            <div>
                                <Image src="/images/wodociag.webp" alt="Przyłącza wodociągu" width={600} height={400} className="rounded-lg shadow-lg" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-hydro-600 mb-4">Przyłącza wodociągowe</h2>
                                <p className="text-gray-700 mb-4">
                                    Oferujemy pełną realizację przyłączy wodociągowych zgodnie z przepisami prawa budowlanego oraz wytycznymi lokalnych dostawców wody.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Bezpieczne i trwałe instalacje</li>
                                    <li>Szybka realizacja zleceń</li>
                                    <li>Gwarancja zgodności z normami</li>
                                </ul>
                                <Link href="/contact" className="inline-block mt-4 bg-hydro-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-hydro-600 transition">Skontaktuj się</Link>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Usługi koparkami */}
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <Image src="/images/koparka-usluga.webp" alt="Usługi koparkami" width={600} height={400} className="rounded-lg shadow-lg" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-hydro-600 mb-4">Usługi koparkami</h2>
                                <p className="text-gray-700 mb-4">
                                    Nasza flota koparek gąsienicowych i kołowych pozwala na precyzyjne i efektywne wykonanie robót ziemnych w każdych warunkach terenowych.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Wykopy pod fundamenty i instalacje</li>
                                    <li>Wyrównywanie terenu i załadunek</li>
                                    <li>Operatorzy z doświadczeniem</li>
                                </ul>
                                <Link href="/contact" className="inline-block mt-4 bg-hydro-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-hydro-600 transition">Skontaktuj się</Link>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Walce i wozidła */}
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-10 items-center flex-row-reverse">
                            <div>
                                <Image src="/images/walec-wozidlo.webp" alt="Usługi walcami i wozidłami" width={600} height={400} className="rounded-lg shadow-lg" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-hydro-600 mb-4">Walcowanie i transport</h2>
                                <p className="text-gray-700 mb-4">
                                    Wozidła i walce drogowe pozwalają nam nie tylko przetransportować materiał, ale też zapewnić odpowiednie zagęszczenie gruntu pod inwestycję.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Zagęszczanie pod drogi i place</li>
                                    <li>Przewóz materiałów sypkich i gruzu</li>
                                    <li>Bezpieczeństwo i wydajność</li>
                                </ul>
                                <Link href="/contact" className="inline-block mt-4 bg-hydro-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-hydro-600 transition">Skontaktuj się</Link>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Wypożyczalnia */}
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <Image src="/images/wypozyczalnia.webp" alt="Wypożyczalnia sprzętu" width={600} height={400} className="rounded-lg shadow-lg" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-hydro-600 mb-4">Wypożyczalnia sprzętu</h2>
                                <p className="text-gray-700 mb-4">
                                    Prowadzimy wypożyczalnię sprzętu budowlanego dla firm i klientów indywidualnych. Oferujemy elastyczne warunki i konkurencyjne ceny.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Koparki i minikoparki</li>
                                    <li>Walce drogowe</li>
                                    <li>Wozidła i zagęszczarki</li>
                                </ul>
                                <Link href="/contact" className="inline-block mt-4 bg-hydro-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-hydro-600 transition">Zapytaj o dostępność</Link>
                            </div>
                        </div>
                    </FadeInSection>

                </div>
            </section>
            <CookieBanner/>
            <Footer />
        </>
    );
}
