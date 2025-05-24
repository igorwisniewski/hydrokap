'use client'
import Image from "next/image";
import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import {useEffect, useState, useRef} from "react";
import styles from "./comps/Main.module.css"
import Link from "next/link";

export default function Home() {
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
    const Counter = ({ end, suffix }: { end: number; suffix?: string }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const duration = 2000;
            const stepTime = 30;
            const increment = end / (duration / stepTime);
            const counter = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(counter);
                }
                setCount(Math.floor(start));
            }, stepTime);

            return () => clearInterval(counter);
        }, [end]);

        return <span className="text-4xl md:text-5xl font-extrabold text-hydro-600">{count}+{suffix}</span>;
    };
    return (
        <>
            <NavDefault />

            <section className="relative w-full h-screen flex items-center justify-center text-white">
                {/* BG image */}
                <Image
                    src="/images/mainBg.webp"
                    alt="Budowa"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay (ciemniejszy dla lepszej czytelności) */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Text + CTA */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Specjaliści od przyłączy, wykopów i robót ziemnych
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Profesjonalizm, doświadczenie i skuteczność
                    </p>
                    <button
                        className="bg-hydro-400 hover:text-hydro-400 hover:bg-gray-100  text-gray-100 font-bold py-3 px-6 rounded-full transition mr-2">
                        Skontaktuj się
                    </button>
                    <button
                        className="border-hydro-400 border-2 hover:text-hydro-400 hover:bg-gray-100  text-gray-100 font-bold py-3 px-6 rounded-full transition">
                        O nas
                    </button>
                </div>
            </section>
            <FadeInSection>
                    <section className="bg-white py-16 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-screen">
                            {/* LEFT TEXT */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-hydro-600 mb-4">
                                    To nie tylko koparki
                                </h2>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                                    Przyłącza, maszyny i doświadczenie – wszystko w jednym miejscu
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    Od ponad 18 lat wspieramy klientów w realizacji projektów ziemnych. Oferujemy
                                    kompleksowe
                                    usługi: przyłącza kanalizacji i wodociągu, roboty ziemne z wykorzystaniem koparek,
                                    walców i wozideł. Jakość i terminowość to nasza dewiza.
                                </p>

                                {/* Stats */}
                                <div className="flex gap-10 mt-8">
                                    <div className="text-center">
                                        <Counter end={20}/>
                                        <p className="font-semibold text-sm mt-2 text-gray-700">ZREALIZOWANYCH
                                            PROJEKTÓW</p>
                                    </div>
                                    <div className="text-center">
                                        <Counter end={18}/>
                                        <p className="font-semibold text-sm mt-2 text-gray-700">LAT DOŚWIADCZENIA</p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="flex justify-center">
                                <Image
                                    src="/images/koparka.webp" // Zmień na właściwą ścieżkę jeśli inna
                                    alt="Minikoparka"
                                    width={500}
                                    height={500}
                                    className="w-auto h-auto rounded-lg  shadow-lg"
                                    priority
                                />
                            </div>
                        </div>
                    </section>
            </FadeInSection>
            <FadeInSection>
                <section className="bg-hydro-50 py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
                        {/* LEFT IMAGE - vertically adjusted */}
                        <div className="w-full md:w-1/2">
                            <div className="relative ">

                                <Image
                                    src="/images/whyUs.webp" // Zmień na właściwą ścieżkę jeśli inna
                                    alt="Minikoparka"
                                    width={300}
                                    height={300}
                                    className="w-auto h-auto rounded-lg  shadow-lg"
                                    priority
                                />

                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-hydro-700 mb-4">
                                Dlaczego warto zaufać właśnie nam?
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Od lat realizujemy z powodzeniem <strong>przyłącza wodociągowe i kanalizacyjne</strong>,
                                a także
                                kompleksowe <strong>roboty ziemne z użyciem koparek, walców i wozideł</strong>. Nasza
                                flota
                                nowoczesnych maszyn i doświadczona kadra gwarantują precyzję, bezpieczeństwo i
                                terminowość.
                            </p>
                            <ul className="list-disc list-inside  text-gray-700 space-y-2">
                                <li><strong >Nowoczesny park maszynowy</strong> – koparki, walce, wozidła renomowanych
                                    marek
                                </li>
                                <li><strong>Kompleksowe usługi</strong> – od projektu po wykonanie przyłączy i wykopów
                                </li>
                                <li><strong>18+ lat doświadczenia</strong> w branży robót ziemnych</li>
                                <li><strong>Terminowość i rzetelność</strong> – zadowolenie klienta na pierwszym miejscu
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </FadeInSection>
            <FadeInSection>
                <section
                    className="relative overflow-hidden py-20 h-[40vh] text-white text-center bg-gradient-to-br from-hydro-300 to-hydro-900 flex flex-col justify-center items-center z-50">


                    {/* Treść */}
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Przekonaliśmy cię?</h2>
                        <p className="mb-6">Napisz do nas dzisiaj!</p>
                        <Link href="/contact"
                              className="bg-hydro-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-hydro-400 transition">Skontaktuj się z nami
                            </Link>
                    </div>
                </section>
            </FadeInSection>

            <Footer/>
        </>
    );
}
