'use client';

import { useState, useEffect, useRef } from "react";
import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import styles from "../comps/Main.module.css";
import CookieBanner from "@/app/comps/CookieBannner";

// FadeInSection jak wcześniej
const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        // @ts-expect-error ignoruj TS
        observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default function ContactPage() {
    return (
        <>
            <NavDefault />

            <FadeInSection>
                <section className="py-20 px-6 md:px-20 bg-white min-h-screen mt-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-hydro-700 mb-6 text-center">Skontaktuj się z nami</h1>
                        <p className="text-center text-gray-600 mb-10">
                            Masz pytania? Wypełnij formularz, a odpowiemy jak najszybciej.
                        </p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-700 mb-1">Imię i nazwisko</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-hydro-400"
                                    placeholder="Jan Kowalski"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-700 mb-1">Adres email</label>
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-hydro-400"
                                    placeholder="jan@example.com"
                                    required
                                />
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="text-sm font-semibold text-gray-700 mb-1">Temat wiadomości</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-hydro-400"
                                    placeholder="Dotyczy oferty / zapytania"
                                    required
                                />
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="text-sm font-semibold text-gray-700 mb-1">Wiadomość</label>
                                <textarea
                                    className="border border-gray-300 rounded-lg p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-hydro-400"
                                    placeholder="Wpisz swoją wiadomość tutaj..."
                                    required
                                />
                            </div>

                            <div className="md:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-hydro-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-hydro-600 transition"
                                >
                                    Wyślij wiadomość
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </FadeInSection>
            <CookieBanner/>
            <Footer />
        </>
    );
}
